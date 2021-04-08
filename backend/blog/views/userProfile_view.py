from rest_framework import viewsets
from ..models.userProfile_model import UserProfile
from ..serializers.userProfile_serializer import UserProfileSerializer


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
