from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)  # Email único
    phone_number = models.CharField(max_length=15, blank=True, null=True)  # Número de teléfono opcional
    address = models.TextField(blank=True, null=True)  # Dirección opcional
    is_seller = models.BooleanField(default=False)  # Para indicar si el usuario es un vendedor
    is_active = models.BooleanField(default=True)  # Para controlar la activación del usuario
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha de creación
    updated_at = models.DateTimeField(auto_now=True)  # Fecha de actualización automática

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'