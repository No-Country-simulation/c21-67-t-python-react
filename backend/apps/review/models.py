from django.db import models
from apps.users.models import CustomUser
from apps.product.models import Product

class Review(models.Model):
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    comment = models.TextField()
    
    class Meta:
        managed = True
        db_table = "review" 
