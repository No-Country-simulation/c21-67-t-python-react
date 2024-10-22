from rest_framework import serializers
from .models import CartItem

class NewCartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = "__all__" 
    def validate_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError("Quantity must be greater than zero.")
        return value

    def validate(self, attrs):
        # Si deseas realizar validaciones adicionales en `cart` o `product`, lo harías aquí.
        return attrs

    def create(self, validated_data):
        return CartItem.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.cart = validated_data.get('cart_id', instance.cart)
        instance.product = validated_data.get('product_id', instance.product)
        instance.quantity = validated_data.get('quantity', instance.quantity)
        instance.save()
        return instance