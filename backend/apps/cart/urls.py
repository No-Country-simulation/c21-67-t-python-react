from django.urls import path
from .views import CartView

urlpatterns = [
    path('carts/', CartView.as_view(), name='cart-list-create'),  # Para listar y crear carritos
    path('carts/<int:pk>/', CartView.as_view(), name='cart-detail'),  # Para obtener, actualizar y eliminar un carrito por ID
]