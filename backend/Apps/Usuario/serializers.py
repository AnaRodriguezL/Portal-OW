from .models import User, SocialNetwork
from rest_framework import serializers
from django.contrib.auth import authenticate

class SocialNetworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialNetwork
        fields = ['url']

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    social_networks = SocialNetworkSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = '__all__'
    
    def create(self, validated_data):
        #Falta incluir logica de redes sociales
        user = User.objects.create_user(**validated_data)
        return user
    
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        user = authenticate(email=email, password=password)
        if user and user.is_active:
            return {'user': user}
        raise serializers.ValidationError("Invalid credentials")