from rest_framework import routers
from .api import RouteViewSet

router = routers.DefaultRouter()
router.register('api/route', RouteViewSet, 'route')

urlpatterns = router.urls