from django.urls import path

from shop import views

urlpatterns = [
    path("products/", views.ProductList.as_view(), name="product-list"),
    path("order/", views.OrderList.as_view(), name="order-list"),
]
