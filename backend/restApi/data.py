todo_list = {1:"test1", 2:"test2"};

def addItem(id, content):
    todo_list[id] = content;

def removeItem(id):
    todo_list.pop(id);

def updateItem(id, content):
    todo_list[id] = content;

def getAllItems():
    return todo_list;