from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import UserManager

class User(AbstractBaseUser, PermissionsMixin):
    # campos comunes
    username = models.CharField(max_length=30, primary_key=True)
    email = models.EmailField(unique=True)
    names = models.CharField(max_length=30, blank=True)
    lastname = models.CharField(max_length=30, blank=True)
    # campos de admin
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email',]
    objects = UserManager()

    def get_full_name(self):
        return self.names +" "+ self.lastname