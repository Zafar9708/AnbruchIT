# contact/urls.py
from django.urls import path
from .views import ContactView  # Ensure this is importing the correct view class

urlpatterns = [
    path('contact/', ContactView.as_view(), name='contact'),
]
