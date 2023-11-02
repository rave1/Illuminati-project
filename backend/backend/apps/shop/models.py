from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=512)
    price = models.DecimalField(decimal_places=2, max_digits=6)
    quantity = models.IntegerField()
    description = models.TextField()
    image = models.ImageField()


class Order(models.Model):
    pass
