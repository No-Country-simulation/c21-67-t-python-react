from rest_framework import serializers
from .models import Cart

class NewCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
        
    def validate(self, attrs):
        user = attrs.get('user_id')  # obtengo el usuario
        # Verifica si ya tiene un carrito
        if Cart.objects.filter(user_id=user).exists():
            raise serializers.ValidationError("Este usuario ya tiene un carrito.")
        
        return attrs

    def create(self, validated_data):
        return Cart.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.user = validated_data.get('user_id', instance.user)
        instance.save()
        return instance
    
        
