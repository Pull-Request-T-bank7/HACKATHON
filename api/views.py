from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Tag, EventFormat, Event
from .serializers import TagSerializer, EventFormatSerializer, EventSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class AuthViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['post'])
    def register(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email') 
        if not all([username, password, email]):
            return Response(
                {'error': 'Username, password and email are required'},
                status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return Response(
                {'error': 'Username already exists'},
                status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(email=email).exists():
            return Response(
                {'error': 'Email already registered'},
                status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(
            username=username,
            password=password,
            email=email)
        return Response(
            {'status': 'User created successfully'},
            status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return Response({'status': 'Logged in', 'user': username})
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def logout(self, request):
        logout(request)
        return Response({'status': 'Logged out'})

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class EventFormatViewSet(viewsets.ModelViewSet):
    queryset = EventFormat.objects.all()
    serializer_class = EventFormatSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer