from rest_framework import generics
from .models import Complements
from .serializers import ComplementsSerializer

# Vista para listar y crear complementos
class ComplementsListCreateView(generics.ListCreateAPIView):
    queryset = Complements.objects.all()
    serializer_class = ComplementsSerializer

# Vista para obtener, actualizar y eliminar un complemento específico
class ComplementsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Complements.objects.all()
    serializer_class = ComplementsSerializer
