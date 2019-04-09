from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('post.urls')),
    path('', include('accounts.urls'))
]

handler404='frontend.views.view_404'
