from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    sum = models.CharField(max_length=500, blank=True)
    content = models.TextField()
    email = models.EmailField(max_length=100, unique=True)
    creaded_at = models.DateTimeField(auto_now_add=True)
