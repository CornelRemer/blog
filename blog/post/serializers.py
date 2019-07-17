#from rest_framework import serializers
from rest_framework_gis import serializers
from post.models import Post, Images
from django.contrib.gis.geos import Point

# Image Serializer
class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'
        #fields = ('image',)


# Post Serializer
#class PostSerializer(serializers.ModelSerializer):
class PostSerializer(serializers.GeoModelSerializer):
    images = ImagesSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        geometry_field='location',
        #fields = ('title', 'summary', 'content', 'images',)
        fields = '__all__'