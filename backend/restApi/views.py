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
