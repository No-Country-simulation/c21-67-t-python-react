from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models import CartItem
from .serializers import NewCartItemSerializer
from json.decoder import JSONDecodeError


class CartitemView(APIView):
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        carts = CartItem.objects.all()
        serializer = NewCartItemSerializer(carts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = NewCartItemSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response("invalid input", status=status.HTTP_400_BAD_REQUEST)
        
    
    def patch(self, request, pk):
        try:
            cartitem = CartItem.objects.get(pk=pk)
            data = JSONParser().parse(request)
            serializer = NewCartItemSerializer(cartitem, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except CartItem.DoesNotExist:
            return Response("Cart not found", status=status.HTTP_404_NOT_FOUND)
        except JSONDecodeError:
            return Response("Invalid input", status=status.HTTP_400_BAD_REQUEST)
        
        
    def delete(self, request, pk):
        try:
            cartitem = CartItem.objects.get(pk=pk)
            cartitem.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except CartItem.DoesNotExist:
            return Response("Cart not found", status=status.HTTP_404_NOT_FOUND)

# Create your views here.
