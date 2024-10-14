from rest_framework import serializers
from .models import Review

class NewReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"  # Incluirá `id`, `user`, `product`, `rating`, `comment`, y `created_at`
        read_only_fields = ['created_at']  # `created_at` se establece automáticamente y no se debe modificar

    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("Rating must be between 1 and 5.")
        return value

    def validate(self, attrs):
        # Validación adicional para asegurarse de que un usuario solo pueda hacer una reseña por producto.
        user = attrs.get('user')
        product = attrs.get('product')
        if Review.objects.filter(user=user, product=product).exists():
            raise serializers.ValidationError("You have already reviewed this product.")
        return attrs

    def create(self, validated_data):
        return Review.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.rating = validated_data.get('rating', instance.rating)
        instance.comment = validated_data.get('comment', instance.comment)
        instance.save()
        return instance