# Set-up Instructions

## 1: Install python
(if you don’t have it installed already) at [python official website](https://www.python.org/downloads/)

## 2: Install pipenv
This will allow you to set up a virtual environment with the included packages.
_You may need to run your shell as an administrator_
```
pip install pipenv
```

## 3: Starting a virtual environment inside the Django project
Go to To-do-list/backend cloned from this repository, and  then use the command:
```
pipenv install
```
This command will install all the depedencies used to set up the project, then you just have to run:

```
pipenv shell
```

## 4: Install the modules
Once you have activated the virtual environment and you are able to use the pipenv shell, install the modules to make the project works.
```
pip install -r requirements.txt
```
## 5: Generate a new secret key for you environment
You need a secret key for this project, the following command you generate a secret key startinh with _django-insecure-$_
```
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```
Create a .env file inside this folder with the secret key generated

SECRET_KEY=your_django_secret_key

## 6: Finally to run the back-end server, just use the following:

```
python manage.py runserver
```

## 7: Run the front-end

Open a terminal and change to the client folder and install the necessary packages

```
cd ../client
npm install
```

After you will be able to run the front-end and use this app!
```
npm run dev
```

## 8: Go to the address
At your preffered brownser go to the app <http://localhost:5173>