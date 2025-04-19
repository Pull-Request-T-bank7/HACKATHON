from django.contrib import admin
from .models import University, CustomUser

@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'country')
    search_fields = ('name', 'city', 'country')

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'university')
    search_fields = ('email', 'username', 'university__name')
    list_filter = ('university',)