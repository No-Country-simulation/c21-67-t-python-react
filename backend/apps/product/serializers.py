from rest_framework import serializers  
from django.utils.translation import gettext_lazy as _
from apps.category.models import Category  
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class NewProductSerializer(serializers.ModelSerializer):
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category')
    images = serializers.ImageField(required=False)

    class Meta:
        model = Product
        fields = ['name', 'price', 'description', 'stock', 'category_id', 'images']

    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError(_("Price must be greater than 0"))
        return value

    def validate_stock(self, value):
        if value < 0:
            raise serializers.ValidationError(_("Stock must be greater than 0"))
        return value

    def validate(self, attrs):
        if attrs.get('name', "") == "":
            raise serializers.ValidationError(_("Name must be provided"))
        if attrs.get('description', "") == "":
            raise serializers.ValidationError(_("Description must be provided"))
        return attrs
    
    def create(self, validated_data):
        return Product.objects.create(**validated_data)

class UpdateProductSerializer(serializers.ModelSerializer):
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category', required=False)

    class Meta:
        model = Product
        fields = ['name', 'price', 'description', 'stock', 'category_id']
        partial = True

    def validate(self, attrs):
        if 'price' in attrs and attrs['price'] < 0:
            raise serializers.ValidationError(_("Price must be greater than 0"))
        if 'stock' in attrs and attrs['stock'] < 0:
            raise serializers.ValidationError(_("Stock must be greater than 0"))
        return attrs

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance