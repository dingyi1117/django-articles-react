from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import ArticlesSerializer      
from .models import Article                    

class ArticlesView(viewsets.ModelViewSet): 
    serializer_class = ArticlesSerializer
    queryset = Article.objects.all()