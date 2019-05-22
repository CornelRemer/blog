from django import forms
from .models import Post, Images

from django.contrib.gis.db import models

class PostForm(forms.ModelForm):
    PUBLIC = (
        (True, 'public'),
        (False, 'not public'),
    )
    title = forms.CharField(max_length=100)
    summary = forms.CharField(max_length=500, label="Kurzfassung.")
    content = models.TextField()
    creaded_at = models.DateTimeField(auto_now_add=True)
    publish = models.BooleanField(default=False, choices=PUBLIC)

    class Meta:
        model = Post
        fields = ('title', 'summary','content', 'publish', )

class ImageForm(forms.ModelForm):
    image = forms.ImageField(label='Bilder')
    class Meta:
        model = Images
        fields = ('image', )