from django.urls import path
from .views import LoginView, RegisterView

app_name = 'usuario'

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("signup/", RegisterView.as_view(), name="register"),
]