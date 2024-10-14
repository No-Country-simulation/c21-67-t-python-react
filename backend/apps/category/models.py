from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    status = models.BooleanField(default=True)

    class Meta:
        managed = True
        db_table = "category" 

    def update(self, status):
        self.status = status
        self.save()