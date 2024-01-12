FROM oven/bun:1

# Set the working directory to /app
WORKDIR /app/

# Copy package.json to the working directory and install dependencies
COPY package*.json ./
RUN bun install

# Copy the current directory contents into the container at /app
COPY . .

# make the resources directory
RUN mkdir ./src/resources

# Set permissions 
RUN chmod 770 ./src/resources

# run the app
EXPOSE 5000
ENTRYPOINT ["bun", "run", "--watch", "src/index.ts"]