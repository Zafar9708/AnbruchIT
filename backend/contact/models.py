# contact/models.py
from django.db import models

class ContactForm(models.Model):
    company_name = models.CharField(max_length=100)
    your_name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return f"{self.your_name} - {self.company_name}"
