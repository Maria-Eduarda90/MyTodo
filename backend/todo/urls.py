from django.urls import path

from .views import TodoList

urlpatterns = [
    path('', TodoList.as_view()),
    path('/<int:pk>', TodoList.as_view(), name="delete"),
]