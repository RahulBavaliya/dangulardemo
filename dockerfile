FROM node:16.15.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app
RUN npm run build --prod
 
FROM nginx:1.17.1-alpine

COPY /nginx-custom.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-step /app/dist/crudangular /usr/share/nginx/html