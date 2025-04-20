from rest_framework import serializers
from .models import Tag, EventFormat, Event

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class EventFormatSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventFormat
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    formats = EventFormatSerializer(many=True, read_only=True)
    tag_ids = serializers.PrimaryKeyRelatedField(
        many=True, write_only=True, queryset=Tag.objects.all(), source='tags'
    )
    format_ids = serializers.PrimaryKeyRelatedField(
        many=True, write_only=True, queryset=EventFormat.objects.all(), source='formats'
    )

    class Meta:
        model = Event
        fields = ['id', 'name', 'number_of_seats', 'location', 'date', 'description', 'image',
                  'tags', 'formats', 'tag_ids', 'format_ids']
