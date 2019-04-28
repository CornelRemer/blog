#from django.contrib import admin
from django.contrib.gis import admin
from .models import Post

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'creaded_at')

admin.site.register(Post, PostAdmin)
