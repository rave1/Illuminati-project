from rest_framework import generics
from shop.serializer import ProductSerializer
from shop.models import Product
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from shop.filters import ProductFilter


class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = ()
    pagination_class = PageNumberPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ProductFilter

class ProductCreate(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer