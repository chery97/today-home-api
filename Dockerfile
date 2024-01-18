FROM node:18-alpine As development
#asd
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE $PORT

CMD ["node", "dist/main"]