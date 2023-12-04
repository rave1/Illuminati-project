from rest_framework.generics import ListAPIView,ListCreateAPIView
from shop.serializer import ProductSerializer, OrderSerializer
from shop.models import Product, Order
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import OrderingFilter, SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from shop.filters import ProductFilter,OrderFilter
from rest_framework.response import Response

class ProductList(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = ()
    pagination_class = PageNumberPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ProductFilter

class CustomPagination(PageNumberPagination):
    page_size_query_param = 'page_size'

    def get_paginated_response(self, data):
        return Response({
            'page_nr':self.get_page_number,
            'results': data,
            'page_size': self.page_size,
        })

class OrderList(ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = CustomPagination
    filter_backends = (DjangoFilterBackend,OrderingFilter)
    filterset_class = OrderFilter

    def get_queryset(self):
        queryset = super().get_queryset().filter(user=self.request.user)
        
        date_param = self.request.query_params.get('date', None)
        if date_param:
            queryset = queryset.filter(order_date=date_param)
        
        order_id_param = self.request.query_params.get('id__istartswith', None)
        if order_id_param:
            queryset = queryset.filter(id__istartswith=order_id_param)

        ordering_param = self.request.query_params.get('ordering', None)
        if ordering_param:
            queryset = queryset.order_by(ordering_param)

        return queryset.prefetch_related('products')

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = OrderSerializer(queryset, many=True)
        
        data = serializer.data
        for order_data in data:
            order_instance = Order.objects.get(pk=order_data['id'])
            product_names = order_instance.products.values_list('name')
            #product_cost = order_instance.products.values_list('price')
            #print(product_names)
            #print(product_cost)
            order_data['products'] = list(product_names)

        return Response(data)
