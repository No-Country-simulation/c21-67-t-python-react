from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)   
    stock = models.IntegerField()
    category_id = models.ForeignKey("category.Category", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta: 
        managed = True  
        db_table = "products"
        ordering = ["-created_at"]