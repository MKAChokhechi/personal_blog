from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models.article import Article


class AllArticleAPIView(APIView):

    def get(self, request, formate=None):
        try:
            all_articles = Article.objects.all().order_by('-created_at')[:10]
            data = []

            for article in all_articles:
                data.append({
                    "title": article.title,
                    "cover": article.cover.url if article.cover else None,
                    "content": article.content,
                    "category": article.category.title,
                    "created_at": article.created_at,
                    "author": article.author.user.first_name + ' ' + article.author.user.last_name,
                    "promote": article.promote,

                })
            return Response({'data': data}, status=status.HTTP_200_OK)
        except:
            return Response({'status': "Interval Server Error, We'll Check It Later"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
