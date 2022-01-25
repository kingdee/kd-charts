
FROM harbor.kux.com/library/nginx:1.19.2-alpine

LABEL maintainer="382078561@qq.com"

ADD ./docs-dist/404.html /usr/share/nginx/html
ADD ./docs-dist/index.html /usr/share/nginx/html
ADD ./docs-dist/umi.css /usr/share/nginx/html
ADD ./docs-dist/umi.js /usr/share/nginx/html
ADD ./docs-dist/charts /usr/share/nginx/html