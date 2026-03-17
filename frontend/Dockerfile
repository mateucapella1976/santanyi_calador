# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npx tinacms build && npx astro build

# Stage 2: Production with TinaCMS self-hosted backend
FROM node:20-alpine AS production

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy built assets and tina backend
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/tina/__generated__ ./tina/__generated__
COPY --from=builder /app/tina/config.ts ./tina/config.ts
COPY --from=builder /app/src/content ./src/content

# Simple static server + tina backend
RUN npm install -g serve

EXPOSE 3000

# Serve static files on port 3000
CMD ["serve", "dist", "-l", "3000", "-s"]
