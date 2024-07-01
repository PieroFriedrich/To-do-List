#  To make it easier for us, I just decided to add this readme with some instructions, but if anyone has doubts just text me in the group chat. This is how to clone and set up the environment. I would also watch the tutorials I’ve sent in the group, so it is easier to understand how the Django works.

## 1: Install python if you don’t have it installed already 

## 2: Install pipenv

This will allow you to set up a virtual environment with the packages included already (that’s what I have understood when watching the tutorials about it)

```
pip install pipenv
```

## Starting a virtual environment inside the Django project

First change the directory to the one cloned from this repository, and  then use the command:

```
pipenv install
```

This command will install all the deTdencies used to set up the project, then you just have to run:

```
pipenv shell
```

## Once you have activated the virtual environment and able to use the pipenv shell, install the modules used to make the project works (basically npm install, using all the modules saved in the .json)

```
pip install -r requirements.txt
```

## Finally to run the server, just use the following:

```
python manage.py runserver
```