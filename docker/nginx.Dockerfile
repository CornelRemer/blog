FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/blog.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/blog/media && \
    mkdir -p /var/www/blog/static