from rest_framework.routers import DefaultRouter
from .views import TagViewSet, EventFormatViewSet, EventViewSet, AuthViewSet

router = DefaultRouter()
router.register(r'tags', TagViewSet)
router.register(r'formats', EventFormatViewSet)
router.register(r'events', EventViewSet)
router.register(r'auth', AuthViewSet, basename='auth')

urlpatterns = router.urls