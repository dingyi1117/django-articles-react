from django.contrib import admin

from .models import Article

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id','title','description','author','tags','created_at','updated_at')
admin.site.register(Article,ArticleAdmin)
