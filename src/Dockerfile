FROM node

RUN mkdir /app
COPY . /app

WORKDIR /app

RUN apt-get update && apt-get install -y netcat

RUN sed -i 's/127.0.0.1/selenium/g' /app/main.js && sed -i 's/127.0.0.1/selenium/g' /app/test_loc.js
CMD ["node", "main"]
