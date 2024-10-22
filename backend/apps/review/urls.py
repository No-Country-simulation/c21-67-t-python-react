from django.urls import path
from .views import ReviewView

urlpatterns = [
    path('reviews/', ReviewView.as_view(), name='review-list-create'),  # Para listar y crear reseñas
    path('reviews/<int:pk>/', ReviewView.as_view(), name='review-detail'),  # Para obtener, actualizar y eliminar una reseña por ID
]