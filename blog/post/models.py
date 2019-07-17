from __future__ import unicode_literals
#from django.db import models
from django.contrib.gis.db import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify

import os
from django.dispatch import receiver

# Create your models here.
class Post(models.Model):
    PUBLIC = (
        (True, 'public'),
        (False, 'not public'),
    )
    author = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    #author = models.ForeignKey('auth.User', related_name="posts", null=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    #image = models.ImageField(upload_to='static/img/', blank=True, null=True)
    location = models.PointField(blank=True, null=True)
    #objects = models.GeoManager()
    post_date = models.DateTimeField(null=True, blank=True)
    creaded_at = models.DateTimeField(auto_now_add=True)
    publish = models.BooleanField(default=False, choices=PUBLIC)

    def latitude(self):
        return self.location.y

    def longitude(self):
        return self.location.x

    def __unicode__(self):
        return self.title

def get_image_filename(instance, filename):
    return 'img/posts/{0}/{1}'.format(instance.post.title, filename)
    
class Images(models.Model):
    post = models.ForeignKey(Post, related_name='images', default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_image_filename, verbose_name='Image')
    #image = models.ImageField(upload_to="static/img/", verbose_name='Image')


@receiver(models.signals.post_delete, sender=Images)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    """
    Deletes file from filesystem
    when corresponding `Images` object is deleted.
    """
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)

@receiver(models.signals.pre_save, sender=Images)
def auto_delete_file_on_change(sender, instance, **kwargs):
    """
    Deletes old file from filesystem
    when corresponding `Images` object is updated
    with new file.
    """
    if not instance.pk:
        return False

    try:
        old_file = Images.objects.get(pk=instance.pk).image
    except Images.DoesNotExist:
        return False

    new_file = instance.image
    if not old_file == new_file:
        if os.path.isfile(old_file.path):
            os.remove(old_file.path)

    #class Meta:
    #    permissions = (
    #        ('view_task', 'View task'),
    #    )