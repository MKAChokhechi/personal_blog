from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.article_view import AllArticleViewSet, SingleArticleViewSet
from .views.userProfile_view import UserProfileViewSet
from .views.user_view import UserViewSet

api = [
    path("articles", AllArticleViewSet.as_view({'get': 'list'})),
    path("article/<int:pk>", SingleArticleViewSet.as_view({'get': 'retrieve'}))
]

router = DefaultRouter()
router.register('api/articles', AllArticleViewSet, basename='articles')

# router.register('api/article/<int:pk>', SingleArticleViewSet, basename='article')
router.register('api/users', UserViewSet)
router.register('api/user-profile', UserProfileViewSet, basename='userprofile')

urlpatterns = [
    path('', include(router.urls)),
    path('api/', include(api))
]
