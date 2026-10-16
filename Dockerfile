# ==============================================================================
# Multi-Stage Dockerfile for sBLOOM Landing Page (React Router v7 / Vite)
# ==============================================================================

# ---- Stage 1: Build Application ----
FROM node:20-alpine AS builder

WORKDIR /app

# Install libc compatibility if needed
RUN apk add --no-cache libc6-compat

# Copy dependency specifications first to leverage Docker layer caching
COPY package.json package-lock.json* ./

# Install all dependencies (including devDependencies required for vite build)
RUN npm ci

# Copy full project source code
COPY . .

# Set production environment and build static + server artifacts
ENV NODE_ENV=production
RUN npm run build

# Remove development dependencies to keep the image lightweight
RUN npm prune --omit=dev

# ---- Stage 2: Production Execution Environment ----
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4180

# Create dedicated non-root user and group with home directory
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 -G nodejs -h /home/reactrouter -D reactrouter

# Copy production dependencies and build artifacts directly with proper ownership
COPY --from=builder --chown=reactrouter:nodejs /app/package.json ./package.json
COPY --from=builder --chown=reactrouter:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=reactrouter:nodejs /app/build ./build
COPY --from=builder --chown=reactrouter:nodejs /app/public ./public

USER reactrouter

# Expose non-standard production port (default: 4180)
EXPOSE 4180

# Launch production server directly without external registry lookups
CMD ["./node_modules/.bin/react-router-serve", "./build/server/index.js"]
