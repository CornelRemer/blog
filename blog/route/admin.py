from django.contrib.gis import admin
from leaflet.admin import LeafletGeoAdmin
from .models import Route

class RouteAdmin(LeafletGeoAdmin):
    list_display = ('title', 'creaded_at')

admin.site.register(Route, RouteAdmin)

