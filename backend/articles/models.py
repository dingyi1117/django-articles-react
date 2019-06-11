from django.db import models

# Create your models here.
class Articles(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    author = models.CharField(max_length=120)
    tags = models.CharField(max_length=120)
    created_at = models.DateTimeField('date created')
    updated_at = models.DateTimeField('date updated')

    def _str_(self):
        return self.title