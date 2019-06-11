from django.contrib import admin

from .models import Articles

class ArticlesAdmin(admin.ModelAdmin):
    list_display = ('title','description','author','tags','created_at','updated_at')
admin.site.register(Articles,ArticlesAdmin)
