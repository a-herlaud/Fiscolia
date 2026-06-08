FROM docker.io/owasp/modsecurity-crs:3-nginx

RUN apt install -y openssl

# Creates a directory pour un truc joli
RUN mkdir -p /etc/nginx/ssl

# Generate the ssl certificate
RUN openssl req -x509 -nodes -out /etc/nginx/ssl/fiscolia.crt -keyout \
    /etc/nginx/ssl/fiscolia.key -subj "/C=MO/ST=KH/L=KH/O=42/OU=42/CN=localhost"

RUN apt-get update

COPY ./.conf /etc/nginx/templates/conf.d/default.conf.template
#COPY ./.conf /etc/nginx/templates/default.conf.template

CMD ["nginx", "-g", "daemon off;"]