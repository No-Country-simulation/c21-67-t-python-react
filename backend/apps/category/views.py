from .serializers import NewCategorySerializer, UpdateCategorySerializer
from .models import Category   
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from json import JSONDecodeError


class CategoryView(APIView):
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        categories = Category.objects.all()
        serializer = NewCategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = NewCategorySerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response("Invalid input", status=status.HTTP_400_BAD_REQUEST)
        
    def patch(self, request, pk):
        try:
            category = Category.objects.get(pk=pk)
            data = JSONParser().parse(request)
            serializer = UpdateCategorySerializer(category, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response("Invalid input", status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        category = Category.objects.get(pk=pk)
        category.update(status=False)
        return Response("Category deleted", status=status.HTTP_204_NO_CONTENT)
    