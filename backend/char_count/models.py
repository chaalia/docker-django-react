from django.db import models


# Create your models here.
class Image(models.Model):
    picture = models.ImageField()
    classified = models.CharField(max_length=100)
    uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "image classified at {}".format(self.uploaded.strftime('%Y-%m-%d'))
