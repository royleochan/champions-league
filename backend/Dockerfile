FROM python:3.9

WORKDIR /app

COPY ./requirements.txt /app

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . /app

ENV PYTHONPATH=/app/app

# $PORT is automatically supplied by Heroku for prod, for local specify port manually
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
