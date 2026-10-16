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

# Create dedicated non-root user and group for security best practices
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 reactrouter

# Copy production node_modules and package manifest
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Copy compiled build directory (contains server and client bundles)
COPY --from=builder /app/build ./build

# Copy public static assets directory
COPY --from=builder /app/public ./public

# Set proper ownership for the non-root user
RUN chown -R reactrouter:nodejs /app

USER reactrouter

# Expose non-standard production port (default: 4180)
EXPOSE 4180

# Launch production server
CMD ["npx", "react-router-serve", "./build/server/index.js"]
