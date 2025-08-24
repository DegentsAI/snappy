# -------------------------------
# 1. Build stage
# -------------------------------
FROM node:22.18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy all project files
COPY . .

# Build Next.js in standalone mode
RUN npm run build

# -------------------------------
# 2. Run stage
# -------------------------------
FROM node:22.18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the standalone build + static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Start Next.js
CMD ["node", "server.js"]
