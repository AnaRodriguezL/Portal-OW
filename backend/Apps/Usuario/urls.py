from django.urls import path
from .views import LoginView

app_name = 'usuario'

urlpatterns = [
    path("login/", LoginView.as_view(), name="logear"),
]