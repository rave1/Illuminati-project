from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    image = models.ImageField(blank=True,null=True)
    age = models.DateField(blank=True,null=True)

    @property
    def display_age(self):
        return self.age

    @property
    def display_image(self):
        return self.image