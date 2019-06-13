from rest_framework import serializers
from .models import Article

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'description', 'author','tags','created_at','updated_at')