from rest_framework import generics
from django_filters import filters
from shop import Product
from django_filters.rest_framework import DjangoFilterBackend

class ProductFilter(filters.CharFilter):
    name = filters.CharFilter(field_name='name')
    
    class Meta:
        model = Product
        fields =['name']

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    filter_backends = (filters.DjangoFilterBackend)
    filterset_fields = ('name')