# ---- Builder Stage ----
    FROM node:22-alpine AS builder
    ENV PNPM_HOME="/pnpm"
    ENV PATH="$PNPM_HOME:$PATH"
    RUN corepack enable
    WORKDIR /app
    COPY package.json pnpm-lock.yaml ./
    # Install ALL dependencies for building
    RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod=false
    COPY . .
    # Run the build -> Creates /app/build
    # Look for errors in this step's logs!
    RUN pnpm build
    
    # ---- Final Stage ----
    FROM node:22-alpine
    RUN apk add --no-cache tzdata
    ENV TZ=Asia/Bangkok
    ENV NODE_ENV=production
    WORKDIR /app
    
    # Copy necessary files from builder
    COPY --from=builder /app/build ./build
    COPY --from=builder /app/package.json ./package.json
    COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
    
    # Install ONLY production dependencies using pnpm in this stage
    ENV PNPM_HOME="/pnpm" 
    ENV PATH="$PNPM_HOME:$PATH"
    RUN corepack enable 
    RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
    
    EXPOSE 3000
    # Correct CMD to run the node server
    CMD ["node", "build/index.js"]