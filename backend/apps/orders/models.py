from django.db import models

# Create your models here.

from django.conf import settings
from apps.product.models import Product  

class Order(models.Model):
    PENDING = 'pending'
    COMPLETED = 'completed'
    CANCELED = 'canceled'

    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (COMPLETED, 'Completed'),
        (CANCELED, 'Canceled'),
    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE, 
        related_name='orders'
    )  # Relaciona la orden con el usuario que la realizó
    order_date = models.DateTimeField(auto_now_add=True)  # Fecha de creación del pedido
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default=PENDING)  # Estado del pedido
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)  # Precio total del pedido

    def __str__(self):
        return f"Order {self.id} by {self.user.username}"

class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, 
        on_delete=models.CASCADE, 
        related_name='order_items'
    )  # Relaciona con la orden a la que pertenece
    product = models.ForeignKey(
        Product, 
        on_delete=models.CASCADE, 
        related_name='order_items'
    )  # El producto que se está ordenando
    quantity = models.PositiveIntegerField()  # Cantidad de productos
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Precio unitario del producto

    def __str__(self):
        return f"{self.quantity} x {self.product.name} in Order {self.order.id}"
    
    def get_total_price(self):
        return self.quantity * self.price  # Calcula el precio total de este ítem en la orden
