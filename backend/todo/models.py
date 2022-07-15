from django.db import models

# Create your models here.
class Todo(models.Model):
    assignment = models.CharField(max_length=255, blank=False, null=False)
    mark_as_done = models.BooleanField(default=False, blank=False)