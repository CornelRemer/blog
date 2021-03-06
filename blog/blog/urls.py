#from django.contrib import admin
from django.contrib.gis import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

from .views import redirect_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('post.urls')),
    path('', include('accounts.urls')),
    path('', include('route.urls')),
    path('Blog/', redirect_view),
    path('Map/', redirect_view),
    path('Contact/', redirect_view),
    path('Impressum/', redirect_view)
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404='frontend.views.view_404'
