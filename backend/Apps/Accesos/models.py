from django.db import models

class Access(models.Model):
    name = models.CharField(max_length=30, blank=True)
    img = models.ImageField(blank=True)
