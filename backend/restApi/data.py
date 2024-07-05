import uuid

todo_list = {}

def generate_key():
    return str(uuid.uuid4()) 

def addItem(content):
    id = generate_key()
    todo_list[id] = content

def removeItem(id):
    if id in todo_list:
        del todo_list[id]

def updateItem(id, content):
    if id in todo_list:
        todo_list[id] = content

def getAllItems():
    return todo_list