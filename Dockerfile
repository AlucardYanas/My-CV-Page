FROM node:20-alpine AS base
RUN npm install pnpm@latest -g --silent

WORKDIR /opt/app
COPY package*.json /opt/app/
RUN pnpm install

FROM base AS dev

ENV PATH /opt/app/node_modules/.bin:$PATH

COPY . .
RUN chown -R node:node /opt/app
USER node

EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]
