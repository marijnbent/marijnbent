FROM node:22.23.4-bookworm-slim AS build
COPY --from=oven/bun:1.4.4-slim /usr/local/bin/bun /usr/local/bin/bun
WORKDIR /app
COPY package.json bun.lock ./
COPY vendor ./vendor
RUN bun install --frozen-lockfile
COPY . .
RUN bun run check && bun run build
RUN rm -rf node_modules && bun install --frozen-lockfile --production
FROM node:22.23.4-bookworm-slim AS runtime
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production SITEHUB_CACHE_PATH=/data/snapshot.json
WORKDIR /app
RUN mkdir /data && chown node:node /data
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/vendor ./vendor
COPY --from=build --chown=node:node /app/package.json /app/server.mjs ./
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s CMD node -e "fetch('http://127.0.0.1:3000/health').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"
CMD ["node", "server.mjs"]
