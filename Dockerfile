FROM oven/bun:1

# Set the working directory to /app
WORKDIR /app/

# Copy package.json to the working directory and install dependencies
COPY package*.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy the current directory contents into the container at /app
COPY . .

# Set permissions 
RUN chmod 770 ./src/resources

# run the app
EXPOSE 3000/tcp
ENTRYPOINT ["bun", "run", "--watch", "src/index.ts"]