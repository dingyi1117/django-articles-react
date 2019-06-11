from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import ArticlesSerializer      
from .models import Articles                    

class ArticlesView(viewsets.ModelViewSet): 
    serializer_class = ArticlesSerializer
    queryset = Articles.objects.all()