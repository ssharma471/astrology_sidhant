# # Use Node.js 22.11.0 Alpine image
# FROM node:22.11.0-alpine

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json to install dependencies
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the Next.js project
# RUN npm run build

# # Expose the port that Next.js will run on
# EXPOSE 3000

# # Start the application
# CMD ["npm", "run", "start"]

# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port Next.js will run on
EXPOSE 3000

# Start the Next.js application in development mode
CMD ["npm", "run", "dev"]
