from rest_framework import serializers
from .models import Category

class NewCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__" 

    def validate(self, attrs):
        name = attrs.get("name")
        if name == "":
            raise serializers.ValidationError("Name cannot be empty")
        if Category.objects.filter(name=name).exists():
            raise serializers.ValidationError("Category already exists")
        return attrs
    
    def create(self, validated_data):
        return Category.objects.create(**validated_data)

class UpdateCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        partial = True

    def validate(self, attrs):
        name = attrs.get("name")
        if name == "":
            raise serializers.ValidationError("Name cannot be empty")
        if Category.objects.filter(name=name).exists():
            raise serializers.ValidationError("Category already exists")
        return attrs

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.save()
        return instance
