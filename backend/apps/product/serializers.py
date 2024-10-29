from rest_framework import serializers  
from django.utils.translation import gettext_lazy as _
from apps.category.models import Category  
from .models import Product, ProductImage

class ProductSerializer(serializers.ModelSerializer):
    '''
    Serializer para representar un producto, incluyendo sus imágenes.
    '''
    images = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'stock', 'category', 'images']
    
    def get_images(self, obj):
        '''
        Obtiene las imágenes del producto.
        
        Args:
            obj (Product): La instancia del producto.
        
        Returns:
            list: Una lista de diccionarios con los IDs y URLs de las imágenes.
        '''
        images = obj.images.all()
        return [{'id': image.id, 'url': image.image.url} for image in images]

class NewProductSerializer(serializers.ModelSerializer):
    '''
    Serializer para crear un nuevo producto.
    '''
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category')
    images = serializers.ListField(child=serializers.ImageField(), write_only=True)

    class Meta:
        model = Product
        fields = ['name', 'price', 'description', 'stock', 'category_id', 'images']

    def validate(self, attrs):
        '''
        Valida los atributos del producto.
        Asegura que el precio y el stock no sean negativos.
        
        Args:
            attrs (dict): Los datos validados.
        
        Returns:
            dict: Los datos validados.
        
        Raises:
            serializers.ValidationError: Si el precio o el stock son negativos.
        '''
        if 'price' in attrs and attrs['price'] < 0:
            raise serializers.ValidationError(_('El precio debe ser mayor que 0'))
        if 'stock' in attrs and attrs['stock'] < 0:
            raise serializers.ValidationError(_('El stock debe ser mayor que 0'))
        return attrs

    def create(self, validated_data):
        '''
        Crea una nueva instancia de producto con los datos validados.
        Maneja la adición de imágenes.
        
        Args:
            validated_data (dict): Los datos validados para crear el producto.
        
        Returns:
            Product: La instancia del producto creada.
        '''
        images = validated_data.pop('images', [])
        product = Product.objects.create(**validated_data)
        for image in images:
            ProductImage.objects.create(product=product, image=image)
        return product

class UpdateProductSerializer(serializers.ModelSerializer):
    '''
    Serializer para actualizar una instancia de producto, incluyendo el manejo de imágenes.
    '''
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category', required=False)
    images_to_delete = serializers.ListField(child=serializers.IntegerField(), write_only=True, required=False)
    new_images = serializers.ListField(child=serializers.ImageField(), write_only=True, required=False)

    class Meta:
        model = Product
        fields = ['name', 'price', 'description', 'stock', 'category_id', 'images_to_delete', 'new_images']
        partial = True

    def validate(self, attrs):
        '''
        Valida los atributos del producto.
        Asegura que el precio y el stock no sean negativos.
        
        Args:
            attrs (dict): Los datos validados.
        
        Returns:
            dict: Los datos validados.
        
        Raises:
            serializers.ValidationError: Si el precio o el stock son negativos.
        '''
        if 'price' in attrs and attrs['price'] < 0:
            raise serializers.ValidationError(_('El precio debe ser mayor que 0'))
        if 'stock' in attrs and attrs['stock'] < 0:
            raise serializers.ValidationError(_('El stock debe ser mayor que 0'))
        return attrs

    def update(self, instance, validated_data):
        '''
        Actualiza la instancia del producto con los datos validados proporcionados.
        Maneja la adición y eliminación de imágenes.
        
        Args:
            instance (Product): La instancia del producto a actualizar.
            validated_data (dict): Los datos validados para actualizar el producto.
        
        Returns:
            Product: La instancia del producto actualizada.
        '''
        images_to_delete = validated_data.pop('images_to_delete', [])
        new_images = validated_data.pop('new_images', [])

        # Actualiza la instancia del producto con los datos validados restantes
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Elimina las imágenes especificadas si las hay
        if images_to_delete:
            instance.images.filter(id__in=images_to_delete).delete()

        # Añade nuevas imágenes si las hay
        if new_images:
            for image in new_images:
                ProductImage.objects.create(product=instance, image=image)

        return instance