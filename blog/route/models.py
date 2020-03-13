#from django.db import models
from django.contrib.gis.db import models
from django.contrib.auth.models import User

import os

# Create your models here.
class Route(models.Model):
    PUBLIC = (
        (True, 'public'),
        (False, 'not public'),
    )
    #author = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    #author = models.ForeignKey('auth.User', related_name="posts", null=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    label = models.TextField(blank=True, null=True)
    route = models.MultiLineStringField(blank=True, null=True)
    creaded_at = models.DateTimeField(auto_now_add=True)
    publish = models.BooleanField(default=False, choices=PUBLIC)