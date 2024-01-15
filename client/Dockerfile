# Étape de construction
FROM node:lts-slim as builder
WORKDIR /app
COPY package.json .
RUN npm install

# Étape finale
FROM node:lts-slim
WORKDIR /app/client
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]