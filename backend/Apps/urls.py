from django.urls import path, include

urlpatterns = [
    path('Usuarios/', include('Apps.Usuario.urls')),
]
