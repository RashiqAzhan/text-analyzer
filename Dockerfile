# Write a dockerfile using latest node js lts slim image for a nest js application. Use multi-stage docker file.

FROM node:22.2-slim as base

USER node

WORKDIR /home/node/app



FROM base as testbase

COPY --chown=node:node package*.json .

RUN npm ci

COPY --chown=node:node . .



FROM testbase as test

RUN npm run format:fix

RUN npm run lint:fix

RUN npm run test

RUN npm run test:e2e



FROM test as builder

RUN npm run build

RUN npm ci --omit=dev



FROM base as production

COPY --chown=node:node --from=builder /home/node/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /home/node/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
