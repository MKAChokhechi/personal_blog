from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.article_view import AllArticleViewSet
from .views.user_view import UserViewSet

router = DefaultRouter()
router.register('articles', AllArticleViewSet, basename='articles')
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
