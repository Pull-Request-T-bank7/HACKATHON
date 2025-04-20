from django.db import models

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class EventFormat(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    
class Event(models.Model):
    name = models.CharField(max_length=255)
    number_of_seats = models.PositiveIntegerField()
    location = models.CharField(max_length=255)
    date = models.DateTimeField()
    description = models.TextField()

    image = models.ImageField(upload_to='event_images/', blank=True, null=True)

    tags = models.ManyToManyField('Tag')
    formats = models.ManyToManyField('EventFormat')

    def __str__(self):
        return self.name
