from django.urls import path
from .views import ProductView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('products/', ProductView.as_view(), name='product'),
    path('products/<int:pk>/', ProductView.as_view(), name='product'),
]
