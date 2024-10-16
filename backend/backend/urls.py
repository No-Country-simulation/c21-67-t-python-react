from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("apps.category.urls")),
    path("api/", include("apps.product.urls")),
]
