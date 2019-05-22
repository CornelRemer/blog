#from django.db import models
from django.contrib.gis.db import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify

# Create your models here.
class Post(models.Model):
    PUBLIC = (
        (True, 'public'),
        (False, 'not public'),
    )
    author = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    #author = models.ForeignKey('auth.User', related_name="posts", null=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    summary = models.CharField(max_length=500, blank=True)
    content = models.TextField()
    #image = models.ImageField(upload_to='static/img/', blank=True, null=True)
    creaded_at = models.DateTimeField(auto_now_add=True)
    publish = models.BooleanField(default=False, choices=PUBLIC)

def get_image_filename(instance, filename):
    #id = instance.post.id
    title = instance.post.title
    slug = slugify(title)
    return "post_images/%s-%s" % (slug, filename)
    
class Images(models.Model):
    post = models.ForeignKey(Post, related_name='images', default=None, on_delete=models.CASCADE)
    #image = models.ImageField(upload_to=get_image_filename, verbose_name='Image')
    image = models.ImageField(upload_to="static/img/", verbose_name='Image')


    #owner = models.ForeignKey(User, related_name="post", on_delete=models.CASCADE, null=True)

    #class Meta:
    #    permissions = (
    #        ('view_task', 'View task'),
    #    )