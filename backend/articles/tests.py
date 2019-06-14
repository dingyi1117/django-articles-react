from django.test import TestCase
from rest_framework.test import APIClient
from .models import Article

class ArticleModelTests(TestCase):
    def setUp(self):
        Article.objects.create(id = 1, title="test", author="ding", description="just a test", tags="test", created_at="2019-01-01", updated_at="2018-12-12")

    def test_title_content(self):
        article = Article.objects.get(id=1)
        expected_object_title = f'{article.title}'
        self.assertEquals(expected_object_title, 'test')

    def test_author_content(self):
        article = Article.objects.get(id=1)
        expected_object_author = f'{article.author}'
        self.assertEquals(expected_object_author, 'ding')

    def test_description_content(self):
        article = Article.objects.get(id=1)
        expected_object_description = f'{article.description}'
        self.assertEquals(expected_object_description, 'just a test')
    
    def test_tags_content(self):
        article = Article.objects.get(id=1)
        expected_object_tags = f'{article.tags}'
        self.assertEquals(expected_object_tags, 'test')

    def test_created_at_content(self):
        article = Article.objects.get(id=1)
        expected_object_created_at = f'{article.created_at}'
        self.assertEquals(expected_object_created_at, '2019-01-01')

#### Rest API Test ###
    def test_restAPI(self):
        client = APIClient()
        client.get('/articles/')
        client.get('/articles/1')
        client.post('/articles/', {'id':'1','title': 'new idea','author':'ding','description':'test','tags':'tags','created_at':'2018-12-12','updated_at':'2019-1-1'}, format='json')
        client.put('/articles/',  {'id':'1','title': 'new idea','author':'ding','description':'test','tags':'tags','created_at':'2018-12-12','updated_at':'2019-1-1'}, format='json')
        client.delete('/articles/')