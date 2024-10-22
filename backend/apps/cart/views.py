from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models import Cart
from .serializers import NewCartSerializer
from json.decoder import JSONDecodeError


class CartView(APIView):
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        carts = Cart.objects.all()
        serializer = NewCartSerializer(carts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = NewCartSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response("invalid input", status=status.HTTP_400_BAD_REQUEST)
        
    
    def patch(self, request, pk):
        try:
            cart = Cart.objects.get(pk=pk)
            data = JSONParser().parse(request)
            serializer = NewCartSerializer(cart, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Cart.DoesNotExist:
            return Response("Cart not found", status=status.HTTP_404_NOT_FOUND)
        except JSONDecodeError:
            return Response("Invalid input", status=status.HTTP_400_BAD_REQUEST)
        
        
    def delete(self, request, pk):
        try:
            cart = Cart.objects.get(pk=pk)
            cart.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Cart.DoesNotExist:
            return Response("Cart not found", status=status.HTTP_404_NOT_FOUND)