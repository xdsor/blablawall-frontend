#!/bin/sh
envsubst < /usr/share/nginx/html/env-template.json > /usr/share/nginx/html/env.json
envsubst '$SERVER_NAME' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
exec nginx -g "daemon off;"
