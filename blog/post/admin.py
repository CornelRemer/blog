#from django.contrib import admin
from django.contrib.gis import admin
from .models import Post, Images
from .form import PostForm

class ImageInline(admin.StackedInline):
    model = Images
    extra = 0

class PostAdmin(admin.ModelAdmin):
    form = PostForm
    inlines = [ImageInline]
    list_display = ('title', 'creaded_at')

admin.site.register(Post, PostAdmin)
