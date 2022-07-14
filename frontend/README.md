# Champions League Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running Locally

### Prerequisites

- Docker should be installed

### Steps

1. Build docker image. Note that `REACT_APP_BACKEND_URL` env variable is set to `http://localhost:8000/`. Please update `Dockerfile` if you are running the backend on different host / port.
```
docker build -t champions-league-fe .
```

2. Run docker image. Ensure that backend is running by this step.
```
docker run -d --name champions-league-frontend-container -p 3000:3000 champions-league-fe
```

## Deployment with Heroku

### Prerequisites

- Heroku CLI should be installed

### Steps

1. Update Dockerfile. `REACT_APP_BACKEND_URL` should be updated to PROD backend url and port should be updated to heroku `$PORT`.

2. Build Image
```
docker build -t registry.heroku.com/champions-league-fe/web .
```

3. Push Image to Heroku Container Registry
```
docker push registry.heroku.com/champions-league-fe/web
```

4. Release Image
```
heroku container:release -a champions-league-fe web
```