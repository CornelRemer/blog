from post.models import Post
from rest_framework import viewsets, permissions #, status
from .serializers import PostSerializer

#from django.contrib.auth.models import User
from django.http import HttpResponseForbidden
from rest_framework import filters
#from rest_framework.response import Response

# Post Viewset
class PostViewSet(viewsets.ModelViewSet):
    #queryset = Post.objects.all()
    permission_classes = [
        #permissions.AllowAny
        permissions.IsAuthenticated
        #permissions.IsAdminUser
    ]
    serializer_class = PostSerializer

    #def get_queryset(self):
        #return Post.objects.filter(publish=True)
        #return Post.objects.all()
        #return Post.objects.filter(owner=self.kwargs['pk'])
        #return self.request.user.posts.all()

    # http://127.0.0.1:8000/api/post?month=6&year=2019
    def get_queryset(self):
        #queryset = Post.objects.filter(publish=True).order_by('-post_date') # reverse order with '-post_date'
        queryset = Post.objects.filter(publish=True).order_by('-post_date')
        requested_month = self.request.query_params.get('month', None)
        requested_year = self.request.query_params.get('year', None)
        if requested_month is not None and requested_year is not None:
            queryset = queryset.filter(post_date__month=requested_month, post_date__year=requested_year)
        return queryset
    
    #def perform_create(self, serializer):
    #    serializer.save(owner=self.request.user)

    def destroy(self, request, *args, **kwargs):
        return HttpResponseForbidden()
        #return Response(status=status.HTTP_204_NO_CONTENT)
    
    def create(self, request, *args, **kwargs):
        return HttpResponseForbidden()
    
    #def retrieve(self, request, *args, **kwargs):
    #    return HttpResponseForbidden()
    
    def update(self, request, *args, **kwargs):
        return HttpResponseForbidden()
    
    def partial_update(self, request, *args, **kwargs):
        return HttpResponseForbidden()