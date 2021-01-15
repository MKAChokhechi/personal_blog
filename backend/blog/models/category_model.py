from django.db import models


class Category(models.Model):
    objects = None
    title = models.CharField(max_length=128, null=False, blank=False)
    cover = models.ImageField(upload_to='files/category_cover', null=False, blank=False)
