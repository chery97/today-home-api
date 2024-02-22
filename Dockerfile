FROM node:18-alpine As development
#asd
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:18-alpine as production

ARG NODE_ENV=dev

ENV NODE_ENV=${NODE_ENV}
ENV PORT 3001

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE $PORT

CMD ["node", "dist/main"]