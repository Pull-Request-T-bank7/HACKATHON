from django.contrib import admin
from .models import Tag, EventFormat, Event


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(EventFormat)
class EventFormatAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'location', 'date', 'number_of_seats')
    list_filter = ('date', 'location', 'tags', 'formats')
    search_fields = ('name', 'location', 'description')
    filter_horizontal = ('tags', 'formats')
