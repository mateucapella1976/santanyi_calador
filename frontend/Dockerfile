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

# Stage 2: Serve static files
FROM node:20-alpine

RUN npm install -g serve

WORKDIR /app
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "dist", "-l", "3000", "-s"]
