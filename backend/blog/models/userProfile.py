from django.db import models
from django.contrib.auth.models import User
# from .article import Article
# from .category import Category


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='files/user_avatar', null=False, blank=False)
    description = models.CharField(max_length=512, null=False, blank=False)
