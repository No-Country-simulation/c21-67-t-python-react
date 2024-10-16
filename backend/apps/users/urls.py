from django.urls import path
from .views import UserListView, UserDetailView, UserCreateView

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),  # Lista todos los usuarios
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),  # Detalle y actualización de un usuario
    path('users/create/', UserCreateView.as_view(), name='user-create'),  # Crear un nuevo usuario
]
