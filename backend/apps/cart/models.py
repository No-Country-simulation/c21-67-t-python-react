from django.db import models
from apps.users.models import User



class Cart(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='carts')
    
    class Meta:
        managed = True
        db_table = "cart" 





