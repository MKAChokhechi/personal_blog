from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..models.article_model import Article
from ..serializers.article_serializer import ArticleSerializer


class AllArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated]
