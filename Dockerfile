FROM oven/bun:1

WORKDIR /app/src/

COPY package*.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT ["bun", "run", "--watch", "./index.ts"]