from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from .views import UniversityViewSet, UserViewSet

router = DefaultRouter()
router.register(r'universities', UniversityViewSet, basename='university')
router.register(r'users', UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include([
        path('token/', obtain_auth_token, name='api_token_auth'),
        path('register/', UserViewSet.as_view({'post': 'register'}), name='register'),
    ])),
]