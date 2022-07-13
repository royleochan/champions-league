FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:8000/

RUN npm run build --production

RUN npm install -g serve

# $PORT is automatically supplied by Heroku for prod, for local specify port manually
CMD serve -p 3000 -s build
