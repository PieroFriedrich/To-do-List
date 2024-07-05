from django.urls import path
from . import views

urlpatterns = [
    path('', views.getAllItems, name="Getting all the items"),
    path('add/', views.addTodoItem, name="Add todo item"),
    path('edit/', views.editTodoItem, name="Edit todo item"),
    path('delete/', views.deleteTodoItem, name="Delete todo item"),
]