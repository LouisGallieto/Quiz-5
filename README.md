```bash
git clone https://github.com/brown-cookies/datastalgo-quiz3.git
cd datastalgo-quiz3/frontend
pnpm install
pnpm run dev

cd ../
python3 -m venv venv
. venv/bin/activate
cd backend
pip install django djangorestframework django-cors-headers Pillow
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```

go to http://localhost:5173 to run the frontend
go to http://127.0.0.1:8000 to run the backend
