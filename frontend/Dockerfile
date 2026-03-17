# Stage 1: Build with TinaCMS local server
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

# Start tina local server in background, wait for it, then build astro
RUN npx tinacms dev &>/dev/null & \
    sleep 5 && \
    npx astro build && \
    kill %1 2>/dev/null || true

# Stage 2: Serve static files with nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Custom nginx config for clean URLs and 404 handling
RUN printf 'server {\n\
    listen 3000;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    absolute_redirect off;\n\
    port_in_redirect off;\n\
\n\
    location / {\n\
        try_files $uri $uri/ $uri/index.html =404;\n\
    }\n\
\n\
    error_page 404 /404.html;\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
