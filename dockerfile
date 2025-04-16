FROM node:22-alpine AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set production environment for build
ENV NODE_ENV=production

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

# Install ALL dependencies (including devDependencies)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod=false 

COPY . .

RUN pnpm build

FROM node:22-alpine

RUN apk add --no-cache tzdata

ENV TZ=Asia/Bangkok
ENV NODE_ENV=production

CMD ["ls", "-la", "/app"]

WORKDIR /app

EXPOSE 3000
CMD ["node", "build"]