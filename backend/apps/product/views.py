from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer, NewProductSerializer
from json.decoder import JSONDecodeError

class ProductView(APIView):
    '''
    Vista para manejar las operaciones CRUD de los productos.
    '''
    parser_classes = [MultiPartParser, FormParser]

    def dispatch(self, request, *args, **kwargs):
        '''
        Sobrescribe el método dispatch para manejar la solicitud.
        
        Args:
            request (HttpRequest): La solicitud HTTP.
            *args: Argumentos adicionales.
            **kwargs: Argumentos clave adicionales.
        
        Returns:
            HttpResponse: La respuesta HTTP.
        '''
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, pk):
        '''
        Maneja las solicitudes GET para obtener todos los productos.
        
        Args:
            request (HttpRequest): La solicitud HTTP.
        
        Returns:
            Response: La respuesta HTTP con los datos de los productos.
        '''
        if pk:
            product = Product.objects.filter(pk=pk).first()
            if product:
                serializer = ProductSerializer(product, context={'request': request})
                response =  Response(serializer.data)
            else: 
                response = Response('Producto no encontrado', status=status.HTTP_404_NOT)
        else:
            products = Product.objects.filter(status=True)
            serializer = ProductSerializer(products, many=True, context={'request': request})
            response = Response(serializer.data)
        return response
    
    def post(self, request, *args, **kwargs):
        '''
        Maneja las solicitudes POST para crear un nuevo producto.
        
        Args:
            request (HttpRequest): La solicitud HTTP.
            *args: Argumentos adicionales.
            **kwargs: Argumentos clave adicionales.
        
        Returns:
            Response: La respuesta HTTP con los datos del producto creado o errores de validación.
        '''
        try:
            serializer = NewProductSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response('JSON inválido', status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        '''
        Maneja las solicitudes DELETE para eliminar un producto.
        
        Args:
            request (HttpRequest): La solicitud HTTP.
            pk (int): El ID del producto a eliminar.
        
        Returns:
            Response: La respuesta HTTP con el resultado de la eliminación.
        '''
        product = Product.objects.filter(pk=pk).first()
        if product:
            product.status = False
            product.save()
            return Response('Producto eliminado', status=status.HTTP_204_NO_CONTENT)
        return Response('Producto no encontrado', status=status.HTTP_404_NOT_FOUND)