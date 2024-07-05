todo_list = {1:"test1", 2:"test2"};

def addItem(id, content):
    todo_list[id] = content;

def removeItem(id):
    print("Todolist before: ", todo_list)
    todo_list.pop(id, None);
    print("Todolist after: ", todo_list)


def updateItem(id, content):
    todo_list[id] = content;

def getAllItems():
    return todo_list;