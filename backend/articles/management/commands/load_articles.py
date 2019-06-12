import csv
import datetime,re
from django.core.management import BaseCommand
from articles.models import Article

def format_date(strdate,id):
    listdate= list(filter(None,re.split('[/.-]',strdate)))
    format =''
    try:
        if int(listdate[2]) < 100:
            format = "%m-%d-%y"
        else:
            format = '%m-%d-%Y'
        date2str = '-'.join(listdate)
        valid_date = datetime.datetime.strptime(date2str, format).strftime('%Y-%m-%d')
        return valid_date
    except ValueError:
        raise ValueError('invalid time of '+ id +':' + listdate)


class Command(BaseCommand):
    help = 'Load a articles csv file into the database'

    def add_arguments(self, parser):
        parser.add_argument('--path', type=str)

    def handle(self, *args, **kwargs):
        path = kwargs['path']
        with open(path, 'rt',encoding ="utf8") as f:
            reader = csv.reader(f, dialect='excel')
            fields_name = next(reader)
            for row in reader:
                article = Article.objects. get_or_create(
                    title=row[1],
                    description=row[2],
                    author=row[3],
                    tags=row[4],
                    created_at= format_date(row[5],row[0]),
                    updated_at= format_date(row[6],row[0])
                )

    