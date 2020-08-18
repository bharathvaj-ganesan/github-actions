FROM node:12.14-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install --only="production"

EXPOSE 3000
CMD ["node", "app.js"]