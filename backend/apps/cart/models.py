from django.db import models
from apps.users.models import CustomUser



class Cart(models.Model):
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='carts')
    
    class Meta:
        managed = True
        db_table = "cart" 





