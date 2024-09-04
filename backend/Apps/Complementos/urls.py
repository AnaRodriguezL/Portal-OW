from django.urls import path
from .views import ComplementsListCreateView, ComplementsDetailView

urlpatterns = [
    path('clients/<int:client_id>/complements/', ComplementsListCreateView.as_view(), name='complements-list-create'),
    path('clients/<int:client_id>/complements/<int:pk>/', ComplementsDetailView.as_view(), name='complements-detail'),
]
