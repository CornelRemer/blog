from rest_framework import serializers
from post.models import Post, Images

# Image Serializer
class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'
        #fields = ('image',)


# Post Serializer
class PostSerializer(serializers.ModelSerializer):
    images = ImagesSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        #fields = ('title', 'summary', 'content', 'images',)
        fields = '__all__'