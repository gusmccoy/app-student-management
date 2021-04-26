FROM nginx:alpine
COPY /dist/app-student-management /usr/share/nginx/html
EXPOSE 80