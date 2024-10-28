from .models import Product
from .serializers import ProductSerializer, NewProductSerializer, UpdateProductSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from json import JSONDecodeError

class ProductView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True, context={'request': request})
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        try:
            serializer = NewProductSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response("Invalid JSON", status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk):
        try:
            product = Product.objects.get(id=pk)
            serializer = UpdateProductSerializer(product, data=request.data, partial=True)  # Cambiar aquí
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Product.DoesNotExist:
            return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)
        
    def delete(self, request, pk):
        product = Product.objects.get(id=pk)
        product.update(status=False)
        return Response("Product deleted", status=status.HTTP_204_NO_CONTENT)