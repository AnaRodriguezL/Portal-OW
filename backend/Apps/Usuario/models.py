from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import UserManager

class User(AbstractBaseUser, PermissionsMixin):
    # campos comunes
    email = models.EmailField(primary_key=True)
    name = models.CharField(max_length=30, blank=True)
    lastname = models.CharField(max_length=30, blank=True)
    tel = models.CharField(max_length=15, blank=True)
    eEmail = models.EmailField(max_length=40, blank=True)
    country = models.CharField(max_length=47, blank=True)
    state = models.CharField(max_length=40, blank=True)
    city = models.CharField(max_length=40, blank=True)
    address = models.CharField(max_length=50, blank=True)
    language = models.CharField(max_length=40, blank=True)
    # campos de admin
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    objects = UserManager()

    def get_full_name(self):
        return self.name +" "+ self.lastname