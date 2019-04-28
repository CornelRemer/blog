#from django.db import models
from django.contrib.gis.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    PUBLIC = (
        (True, 'public'),
        (False, 'not public'),
    )
    author = models.ForeignKey('auth.User', related_name="posts", null=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    summary = models.CharField(max_length=500, blank=True)
    content = models.TextField()
    creaded_at = models.DateTimeField(auto_now_add=True)
    publish = models.BooleanField(default=False, choices=PUBLIC)

    #owner = models.ForeignKey(User, related_name="post", on_delete=models.CASCADE, null=True)

    #class Meta:
    #    permissions = (
    #        ('view_task', 'View task'),
    #    )