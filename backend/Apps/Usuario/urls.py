from django.urls import path
from .views import LoginView, RegisterView, UserDetailView, ChangePasswordView

app_name = 'usuario'

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("signup/", RegisterView.as_view(), name="register"),
    path("user/<str:email>/", UserDetailView.as_view(), name ="profile"),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
]