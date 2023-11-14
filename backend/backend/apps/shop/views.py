from rest_framework import generics
from shop.serializer import ProductSerializer
from shop.models import Product
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from shop.filters import ProductFilter
from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import ListAPIView


class ProductList(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = ()
    pagination_class = PageNumberPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ProductFilter

class ProductCreate(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer