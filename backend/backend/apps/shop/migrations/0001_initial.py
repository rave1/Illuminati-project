# Generated by Django 4.2.7 on 2023-11-03 19:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=512)),
                ("price", models.DecimalField(decimal_places=2, max_digits=6)),
                ("quantity", models.IntegerField()),
                ("description", models.TextField()),
                ("image", models.ImageField(upload_to="")),
            ],
        ),
        migrations.CreateModel(
            name="Order",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("city", models.CharField(max_length=512)),
                ("zip_code", models.CharField(max_length=64)),
                ("street", models.CharField(max_length=128)),
                ("house_number", models.CharField(max_length=64)),
                (
                    "status",
                    models.CharField(
                        choices=[("P", "Paid"), ("R", "In realization"), ("S", "Sent")],
                        default="P",
                        max_length=1,
                    ),
                ),
                (
                    "products",
                    models.ManyToManyField(related_name="orders", to="shop.product"),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="orders",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
