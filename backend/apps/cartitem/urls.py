from django.urls import path
from .views import CartitemView

urlpatterns = [
    path('carts/', CartitemView.as_view(), name='cartitem-list-create'),  # Para listar y crear carritos
    path('carts/<int:pk>/',CartitemView.as_view(), name='cartitem-detail'),  # Para obtener, actualizar y eliminar un carrito por ID
]