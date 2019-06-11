from rest_framework import serializers
from .models import Articles

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ('id', 'title', 'description', 'author','tags','created_at','updated_at')