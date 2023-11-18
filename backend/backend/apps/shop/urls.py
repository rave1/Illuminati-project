from django.urls import path

from shop import views

urlpatterns = [
    path('products/', views.ProductList.as_view(), name='product-list'),
]   
