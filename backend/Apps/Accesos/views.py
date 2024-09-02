from rest_framework import generics
from .models import Access
from .serializers import AccessSerializer

# Listar y crear accesos
class AccessListCreateView(generics.ListCreateAPIView):
    queryset = Access.objects.all()
    serializer_class = AccessSerializer

# Obtener, actualizar y eliminar un acceso específico
class AccessDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Access.objects.all()
    serializer_class = AccessSerializer