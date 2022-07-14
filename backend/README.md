# Champions League Backend

This project was written with FastAPI.

## Running Locally

### Prerequisites

- Docker should be installed
- Running postgres database instance

### Steps

1. Build docker image. Note that you should provide a `.env` file with the format as specified in `.env_sample.txt`.
```
docker build -t champions-league-be .
```

1. Run docker image and provide env variables from `.env` file. Command runs the backend on port `8000`.
```
docker run -d --name champions-league-backend-container -p 8000:8000 --env-file .env champions-league-be
```

## Deployment with Heroku

### Prerequisites

- Heroku CLI should be installed

### Steps

1. Update Dockerfile. Port should be updated to heroku `$PORT`.

2. Build Image
```
docker build -t registry.heroku.com/champions-league-be/web .
```

3. Push Image to Heroku Container Registry
```
docker push registry.heroku.com/champions-league-be/web
```

4. Release Image
```
heroku container:release -a champions-league-be web
```