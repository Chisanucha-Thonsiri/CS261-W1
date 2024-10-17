# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install Node.js dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your Node.js app runs on
EXPOSE 3000

# Command to start the Node.js application
CMD ["node", "server.js"]

