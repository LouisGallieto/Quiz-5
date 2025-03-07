from .models import Products
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = [
            "id",
            "title",
            "image",
            "brand",
            "category",
            "description",
            "rating",
            "num_reviews",
            "price",
            "stock",
        ]
