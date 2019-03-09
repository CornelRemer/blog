from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    summary = models.CharField(max_length=500, blank=True)
    content = models.TextField()
    email = models.EmailField(max_length=100, unique=True)
    creaded_at = models.DateTimeField(auto_now_add=True)

    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
