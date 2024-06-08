from django.db import models
from django.db.models import Count, Prefetch


# Models
class Author(models.Model):
    name = models.CharField(max_length=100)
    
class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)


# 6.1
def print_books_with_authors():
    books_with_authors = Book.objects.select_related('author').all()

    for book in books_with_authors:
        print(f'"{book.title}". {book.author.name}')


# 6.2
def print_authors_with_books():
    authors_with_books = Author.objects.prefetch_related(Prefetch('book_set', queryset=Book.objects.all())).all()

    for author in authors_with_books:
        book_titles = ', '.join([book.title for book in author.book_set.all()])
        print(f'{author.name}: {book_titles}')
        
        
        
# 6.3
def print_authors_with_book_count():
    authors_with_book_count = Author.objects.annotate(book_count=Count('book')).order_by('-book_count')
    
    for author in authors_with_book_count:
        print(f'{author.name}: {author.book_count}')