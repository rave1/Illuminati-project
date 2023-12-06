from rest_framework.generics import ListAPIView, ListCreateAPIView
from shop.serializer import ProductSerializer, OrderSerializer, OrderCreateSerializer
from shop.models import Product, Order
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from shop.filters import ProductFilter, OrderFilter
from rest_framework.permissions import IsAuthenticated


class ProductList(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = ()
    pagination_class = PageNumberPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ProductFilter


class OrderList(ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = PageNumberPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = OrderFilter

    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user)

    def get_serializer_class(self):
        if self.request.method == "POST":
            serializer_class = OrderCreateSerializer
        else:
            serializer_class = self.serializer_class
        return serializer_class
