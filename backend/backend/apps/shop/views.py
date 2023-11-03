from rest_framework.generics import ListAPIView
from shop.serializer import ProductSerializer
from shop.models import Product
from rest_framework.pagination import PageNumberPagination


class ProductList(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = ()
    pagination_class = PageNumberPagination
