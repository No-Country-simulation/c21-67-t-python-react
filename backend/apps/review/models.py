from django.db import models
from apps.users.models import User

class Review(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    product_id = models.ForeignKey('Product', on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    comment = models.TextField()
    
    class Meta:
        managed = True
        db_table = "review" 
