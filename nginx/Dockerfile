FROM nginx:alpine

WORKDIR /usr/share/nginx/html

WORKDIR /etc/nginx/conf.d

COPY ./nginx/default.conf .

COPY /dist/dap-mandiri-apps /usr/share/nginx/html

EXPOSE 80
