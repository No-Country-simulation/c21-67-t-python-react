from django.urls import path
from .views import ProductView

urlpatterns = [
    path('products/', ProductView.as_view(), name='product'),
    path('products/<int:pk>/', ProductView.as_view(), name='product'),
]