FROM node:14.15.1
COPY . /app
WORKDIR /app
CMD [ "node","run.js" ]