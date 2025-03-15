# Stage 1: Build the application
FROM node:14 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Stage 2: Create a minimal final image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app .

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "start"]