FROM nginx:alpine
COPY /dist/seminar-demo-fe /usr/share/nginx/html
EXPOSE 80