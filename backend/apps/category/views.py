from .serializers import NewCategorySerializer, UpdateCategorySerializer
from .models import Category   
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from json import JSONDecodeError

class CategoryView(APIView):
    '''
    Esta clase define las operaciones CRUD para el modelo `Category`.
    Utiliza `APIView` de Django REST Framework para manejar peticiones HTTP.
    '''

    def dispatch(self, request, *args, **kwargs):
        '''
        Sobrescribe el método `dispatch` de `APIView` para manejar la solicitud antes de que
        pase a los métodos `get`, `post`, `patch` o `delete`. Se utiliza como punto de entrada
        inicial para cada petición HTTP.
        '''
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        '''
        Maneja la petición GET para obtener todas las categorías.
        Recupera todas las instancias de `Category`, las serializa y devuelve en la respuesta.

        Returns:
            Response: Un objeto de respuesta que contiene la lista serializada de categorías.
        '''
        categories = Category.objects.filter(status=True)
        serializer = NewCategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        '''
        Maneja la petición POST para crear una nueva categoría.
        Parsea los datos del cuerpo de la solicitud y utiliza `NewCategorySerializer` 
        para validarlos y crear la instancia.

        Returns:
            Response: Un objeto de respuesta con los datos de la categoría creada, o
            un mensaje de error si la entrada es inválida.
        '''
        try:
            data = JSONParser().parse(request)
            serializer = NewCategorySerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response('Invalid input', status=status.HTTP_400_BAD_REQUEST)
        
    def patch(self, request, pk):
        '''
        Maneja la petición PATCH para actualizar parcialmente una categoría existente.
        Busca la categoría por su ID (`pk`), parsea los datos de la solicitud y utiliza
        `UpdateCategorySerializer` para validar y actualizar la instancia.

        Args:
            pk (int): ID de la categoría a actualizar.

        Returns:
            Response: Un objeto de respuesta con los datos de la categoría actualizada o un mensaje de error.
        '''
        try:
            category = Category.objects.get(pk=pk)
            data = JSONParser().parse(request)
            serializer = UpdateCategorySerializer(category, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response('Invalid input', status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        '''
        Maneja la petición DELETE para marcar una categoría como eliminada (soft delete).
        Cambia el estado de la categoría a `False`, indicando que está inactiva.

        Args:
            pk (int): ID de la categoría a eliminar.

        Returns:
            Response: Un objeto de respuesta con un mensaje de confirmación y estado HTTP 204.
        '''
        category = Category.objects.get(pk=pk)
        category.update(status=False)
        return Response('Category deleted', status=status.HTTP_204_NO_CONTENT)
