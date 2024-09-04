from django.urls import path, include

urlpatterns = [
    path('Users/', include('Apps.Usuario.urls')),
    path('clients/<int:client_id>/Access/', include('Apps.Accesos.urls')),
    path('Clients/', include('Apps.Clientes.urls')),
    path('clients/<int:client_id>/Complements/', include('Apps.Complementos.urls')),
    path('Services/', include('Apps.Servicios.urls')),
]
