from django.core.validators import EmailValidator
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import University, CustomUser

class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    university = serializers.PrimaryKeyRelatedField(
        queryset=University.objects.all(),
        required=False
    )

    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'password', 'username', 'university')
        extra_kwargs = {
            'email': {'validators': [EmailValidator()]},
        }

    def validate_email(self, value):
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("Пользователь с таким email уже существует")
        return value

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    university = serializers.PrimaryKeyRelatedField(
        queryset=University.objects.all(),
        required=False
    )

    class Meta:
        model = CustomUser
        fields = ('email', 'password', 'username', 'university')

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)