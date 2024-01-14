FROM node:lts-slim

RUN mkdir -p /app/client

WORKDIR /app/client

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]