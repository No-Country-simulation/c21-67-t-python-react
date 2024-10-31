from rest_framework import serializers
from .models import Category

class NewCategorySerializer(serializers.ModelSerializer):
    '''
    Serializer para representar una categoría.
    '''
    class Meta:
        model = Category
        fields = '__all__'

    def create(self, validated_data):
        '''
        Crea una nueva instancia de categoría con los datos validados.
        
        Args:
            validated_data (dict): Los datos validados para crear la categoría.
        
        Returns:
            Category: La instancia de la categoría creada.
        '''
        return Category.objects.create(**validated_data)

class UpdateCategorySerializer(serializers.ModelSerializer):
    '''
    Serializer para actualizar una instancia de categoría.
    '''
    class Meta:
        model = Category
        fields = '__all__'
        partial = True

    def validate(self, attrs):
        '''
        Valida los atributos de la categoría.
        Asegura que el nombre no esté vacío y que la categoría no exista ya.
        
        Args:
            attrs (dict): Los datos validados.
        
        Returns:
            dict: Los datos validados.
        
        Raises:
            serializers.ValidationError: Si el nombre está vacío o la categoría ya existe.
        '''
        name = attrs.get('name')
        if name == '':
            raise serializers.ValidationError('El nombre no puede estar vacío')
        if Category.objects.filter(name=name).exists():
            raise serializers.ValidationError('La categoría ya existe')
        return attrs

    def update(self, instance, validated_data):
        '''
        Actualiza la instancia de la categoría con los datos validados proporcionados.
        
        Args:
            instance (Category): La instancia de la categoría a actualizar.
            validated_data (dict): Los datos validados para actualizar la categoría.
        
        Returns:
            Category: La instancia de la categoría actualizada.
        '''
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance