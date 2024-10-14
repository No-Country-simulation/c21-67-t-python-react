from django.db import models
from apps.category.models import Category

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)   
    stock = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.BooleanField(default=True)

    class Meta: 
        managed = True  
        db_table = "products"
        ordering = ["-created_at"]
    
    def update(self, status):
        self.status = status
        self.save()