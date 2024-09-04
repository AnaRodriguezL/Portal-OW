from rest_framework import generics
from .models import Services
from .serializers import ServicesSerializer

# Vista para listar y crear Servicios
class ServicesListCreateView(generics.ListCreateAPIView):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer

# Vista para obtener, actualizar y eliminar un servicio específico
class ServicesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer
