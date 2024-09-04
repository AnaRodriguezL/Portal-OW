from django.urls import path, include

urlpatterns = [
    path('Usuarios/', include('Apps.Usuario.urls')),
    path('Access/', include('Apps.Accesos.urls')),
    path('Clientes/', include('Apps.Clientes.urls')),
    path('Complementos/', include('Apps.Complementos.urls')),
    path('Servicios/', include('Apps.Servicios.urls')),
]
