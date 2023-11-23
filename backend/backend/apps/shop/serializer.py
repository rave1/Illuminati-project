from rest_framework import serializers
from shop.models import Product, Order


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = (
            'id', 'name', 'price', 'quantity',
            'description', 'image'
        )

class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = (
            'id', 'city', 'zip_code', 'street', 'house_number',
            'status', 'products', 'user'
        )