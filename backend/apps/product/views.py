from .models import Product
from .serializers import ProductSerializer, NewProductSerializer, UpdateProductSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from json import JSONDecodeError

class ProductView(APIView):
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = NewProductSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response("Invalid JSON", status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk):
        try:
            data = JSONParser().parse(request)
            product = Product.objects.get(id=pk)
            serializer = UpdateProductSerializer(product, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response("Invalid JSON", status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        product = Product.objects.get(id=pk)
        product.update(status=False)
        return Response("Product deleted", status=status.HTTP_204_NO_CONTENT)