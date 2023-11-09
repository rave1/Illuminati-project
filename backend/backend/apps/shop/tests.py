from django.test import TestCase
from django.db import models
from django_filters import rest_framework as filters
from .models import Product
from .filters import ProductFilter


class ProductFilterTest(TestCase):
    def setUp(self):
        Product.objects.create(name='Kawa')
        Product.objects.create(name='Kawa z mlekiem')
        Product.objects.create(name='Herbata')

    def test_name_filter_exact_match(self):
        filter_set = ProductFilter(
            data={'name': 'Kawa'}, queryset=Product.objects.all())
        self.assertTrue(filter_set.is_valid())
        filtered_queryset = filter_set.qs
        self.assertEqual(filtered_queryset.count(), 1)
        self.assertEqual(filtered_queryset[0].name, 'Kawa')

    def test_name_filter_partial_match(self):
        filter_set = ProductFilter(
            data={'name': 'Kawa'}, queryset=Product.objects.all())
        self.assertTrue(filter_set.is_valid())
        filtered_queryset = filter_set.qs
        self.assertEqual(filtered_queryset.count(), 2)
        self.assertIn('Kawa', [product.name for product in filtered_queryset])
        self.assertIn('Kawa z mlekiem', [
                      product.name for product in filtered_queryset])

    def test_name_filter_no_match(self):
        filter_set = ProductFilter(
            data={'name': 'Herbata z cytryną'}, queryset=Product.objects.all())
        self.assertTrue(filter_set.is_valid())
        filtered_queryset = filter_set.qs
        self.assertEqual(filtered_queryset.count(), 0)
