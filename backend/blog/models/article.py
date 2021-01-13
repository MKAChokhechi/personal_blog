from django.db import models
from ckeditor.fields import RichTextField
from datetime import datetime
from .userProfile import UserProfile
from .category import Category


class Article(models.Model):
    objects = None
    title = models.CharField(max_length=128, null=False, blank=False)
    cover = models.ImageField(upload_to='files/article_cover', null=False, blank=False)
    content = RichTextField()
    created_at = models.DateTimeField(default=datetime.now, blank=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    promote = models.BooleanField(default=False)