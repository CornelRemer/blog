#from rest_framework import serializers
from rest_framework_gis import serializers
from route.models import Route
#from django.contrib.gis.geos import Point

# Post Serializer
#class PostSerializer(serializers.ModelSerializer):
class RouteSerializer(serializers.GeoModelSerializer):
    class Meta:
        model = Route
        #geometry_field='location',
        #fields = ('title', 'summary', 'content', 'images',)
        fields = '__all__'