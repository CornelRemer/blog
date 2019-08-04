from django import forms
from .models import Post, Images

from django.contrib.gis.db import models

class PostForm(forms.ModelForm):
    PUBLIC = (
        (True, 'public'),
        (False, 'not public'),
    )
    title = forms.CharField(max_length=100)
    content = models.TextField()
    location = models.PointField(blank=True, null=True)
    creaded_at = models.DateTimeField(auto_now_add=True)
    publish = models.BooleanField(default=False, choices=PUBLIC)
    post_date = models.DateTimeField(null=True, blank=True)

    class Meta:
        model = Post
        fields = ('title', 'content', 'location', 'publish', 'post_date',)

class ImageForm(forms.ModelForm):
    image = forms.ImageField(label='Bilder')
    caption = models.TextField(blank=True, null=True)
    class Meta:
        model = Images
        fields = ('image', 'caption', )