# repo:tag (version)
FROM node:alpine

RUN mkdir -p /usr/src

# Set the working directory
WORKDIR /usr/src

COPY package.json /usr/src

# Install dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . /usr/src

# Make port available to the host machine
EXPOSE 3000

# Define environment variable
ENV PORT 3000

# Start command
CMD ["node", "server.js"]
