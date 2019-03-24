from django.shortcuts import render, redirect

# Create your views here.

def view_404(request):
    response = redirect('')
    return response

def index(request):
    return render(request, 'frontend/index.html')