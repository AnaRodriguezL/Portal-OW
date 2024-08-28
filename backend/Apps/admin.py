from django.contrib import admin
from Apps.Usuario.models import User
from Apps.Accesos.models import Access
from Apps.Clientes.models import Client
from Apps.Complementos.models import Complements

admin.site.register(User)
admin.site.register(Access)
admin.site.register(Client)
admin.site.register(Complements)
