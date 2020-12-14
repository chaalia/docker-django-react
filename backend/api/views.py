from rest_framework import viewsets
from .serializers import ImageSerializers
from char_count.models import Image


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all().order_by('-uploaded')
    serializer_class = ImageSerializers
