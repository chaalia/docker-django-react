from rest_framework import serializers
from char_count.models import Image


class ImageSerializers(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"
