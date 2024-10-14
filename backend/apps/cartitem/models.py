from django.db import models
from apps.cart.models import Cart
from apps.product.models import Product



class CartItem(models.Model):
    cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    
    class Meta:
        managed = True
        db_table = "cartitem" 