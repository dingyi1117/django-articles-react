from django.db import models

# Create your models here.
class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=300)
    description = models.TextField()
    author = models.CharField(max_length=120)
    tags = models.CharField(max_length=300)
    created_at =  models.DateField()
    updated_at = models.DateField()

    def _str_(self):
        return self.title
