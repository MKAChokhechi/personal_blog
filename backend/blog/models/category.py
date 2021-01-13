from django.db import models
# from .userProfile import UserProfile
# from .article import Article


class Category(models.Model):
    title = models.CharField(max_length=128, null=False, blank=False)
    cover = models.ImageField(upload_to='files/category_cover', null=False, blank=False)
