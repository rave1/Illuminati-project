from rest_framework import serializers
from shop.models import Product


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = (
            'id', 'name', 'price', 'quantity',
            'description', 'image'
<<<<<<< HEAD
        )
=======
        )
>>>>>>> feat/views
