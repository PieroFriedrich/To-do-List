from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . import data
import json

@api_view(['GET'])
def getAllItems(request):
    list = data.getAllItems();
    return Response(list);

@api_view(['POST'])
def addTodoItem(request):
    newItem = request.body
    newItem = newItem.decode('utf-8')
    newItem = json.loads(newItem)
    
    data.addItem(newItem["id"], newItem["content"])

    list = data.getAllItems();
    return Response(list);

@api_view(['PUT'])
def editTodoItem(request):
    editItem = request.body
    editItem = editItem.decode('utf-8')
    editItem = json.loads(editItem)
    
    data.updateItem(editItem["id"], editItem["content"])

    list = data.getAllItems();
    return Response(list);

@api_view(['DELETE'])
def deleteTodoItem(request):
    index = request.body
    index = index.decode('utf-8')
    index = json.loads(index)
    
    data.removeItem(int(index))

    list = data.getAllItems();
    return Response(list);