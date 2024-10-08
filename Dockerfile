FROM node:20-alpine AS base
RUN npm install pnpm@latest -g --silent

FROM base AS dev

ENV PATH /opt/app/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY package*.json /opt/app/
RUN pnpm install
COPY . .
RUN chown -R node:node /opt/app
USER node

EXPOSE 3000
EXPOSE 3333

CMD [ "pnpm", "run", "dev" ]
