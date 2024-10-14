from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from json.decoder import JSONDecodeError
from .models import Review
from .serializers import NewReviewSerializer

class ReviewView(APIView):
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        reviews = Review.objects.all()
        serializer = NewReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = NewReviewSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response("Invalid input", status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        try:
            review = Review.objects.get(pk=pk)
            data = JSONParser().parse(request)
            serializer = NewReviewSerializer(review, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Review.DoesNotExist:
            return Response("Review not found", status=status.HTTP_404_NOT_FOUND)
        except JSONDecodeError:
            return Response("Invalid input", status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            review = Review.objects.get(pk=pk)
            review.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Review.DoesNotExist:
            return Response("Review not found", status=status.HTTP_404_NOT_FOUND)

# Create your views here.
