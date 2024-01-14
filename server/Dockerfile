FROM oven/bun:1

RUN mkdir -p /app/server

WORKDIR /app/server

COPY package.json .

RUN bun install

COPY . .

RUN mkdir ./src/resources

# Set permissions 
RUN chmod 770 ./src/resources

# run the app
EXPOSE 5000
ENTRYPOINT ["bun", "run", "--watch", "index.ts"]