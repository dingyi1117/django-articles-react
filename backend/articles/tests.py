from django.test import TestCase

from .models import Article

#######################
# need to be done
#########################
class ArticleModelTests(TestCase):
    def test_wrong_date(self):
        article = Article(created_at = "2020-11-11")
self.assertIs()
