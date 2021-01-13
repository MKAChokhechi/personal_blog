from django.conf.urls import url
from .views import article

urlpatterns = [
    url(r'^article/all', article.AllArticleAPIView.as_view(), name='all_articles')
]
