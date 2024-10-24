# apps/orders/serializers.py
from rest_framework import serializers
from .models import Order, OrderItem
from apps.product.models import Product

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'price']
        read_only_fields = ['price']

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True)
    order_date = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = Order
        fields = ['id', 'user', 'order_date', 'status', 'total_price', 'order_items']

    def create(self, validated_data):
        order_items_data = validated_data.pop('order_items')
        order = Order.objects.create(**validated_data)
        total_price = 0
        for item_data in order_items_data:
            product = item_data['product']
            quantity = item_data['quantity']
            price = product.price * quantity
            total_price += price
            OrderItem.objects.create(order=order, product=product, quantity=quantity, price=price)

        # Guardamos el total final en el modelo de la orden
        order.total_price = total_price
        order.save()
        return order

class UpdateOrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['product', 'quantity']

class UpdateOrderSerializer(serializers.ModelSerializer):
    order_items = UpdateOrderItemSerializer(many=True, required=False)

    class Meta:
        model = Order
        fields = ['status', 'order_items']  # Permitimos actualizar el estado y los ítems
        partial = True

    def update(self, instance, validated_data):
        order_items_data = validated_data.pop('order_items', None)  # Puede que no actualicen los ítems
        instance.status = validated_data.get('status', instance.status)
        instance.save()

        total_price = 0

        if order_items_data:
            # Si hay cambios en los OrderItems, recalculamos el total
            instance.order_items.all().delete()  # Eliminamos los antiguos OrderItems
            for item_data in order_items_data:
                product = item_data['product']
                quantity = item_data['quantity']
                price = product.price * quantity
                total_price += price

                # Volvemos a crear los OrderItems con los datos actualizados
                OrderItem.objects.create(order=instance, product=product, quantity=quantity, price=product.price)

        # Actualizamos el precio total de la orden
        instance.total_price = total_price if order_items_data else instance.total_price
        instance.save()

        return instance

