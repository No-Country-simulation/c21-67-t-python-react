from rest_framework import serializers  
from django.utils.translation import gettext_lazy as _
from apps.category.models import Category  
from .models import Product, ProductImage

class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'stock', 'category', 'images']
    
    def get_images(self, obj):
        images = obj.images.all()
        return [{'id': image.id, 'url': image.image.url} for image in images]

class NewProductSerializer(serializers.ModelSerializer):
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category')
    images = serializers.ListField(child=serializers.ImageField(), write_only=True)

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
        images = validated_data.pop('images', [])
        product = Product.objects.create(**validated_data)
        for image in images:
            ProductImage.objects.create(product=product, image=image)
        return product

class UpdateProductSerializer(serializers.ModelSerializer):
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category', required=False)
    images_to_delete = serializers.ListField(child=serializers.IntegerField(), write_only=True, required=False)
    new_images = serializers.ListField(child=serializers.ImageField(), write_only=True, required=False)

    class Meta:
        model = Product
        fields = ['name', 'price', 'description', 'stock', 'category_id', 'images_to_delete', 'new_images']
        partial = True

    def validate(self, attrs):
        if 'price' in attrs and attrs['price'] < 0:
            raise serializers.ValidationError(_("Price must be greater than 0"))
        if 'stock' in attrs and attrs['stock'] < 0:
            raise serializers.ValidationError(_("Stock must be greater than 0"))
        return attrs

    def update(self, instance, validated_data):
        images_to_delete = validated_data.pop('images_to_delete', [])
        new_images = validated_data.pop('new_images', [])

        # Update the product instance with the remaining validated data
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if images_to_delete:
            instance.images.filter(id__in=images_to_delete).delete()

        if new_images:
            for image in new_images:
                ProductImage.objects.create(product=instance, image=image)

        return instance