# Use the official Node.js image as our base
FROM node:18-alpine
# Set the working directory inside the container
WORKDIR /app
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production
# Copy the rest of the application code
COPY src/ ./src/
# Expose the port the app runs on
EXPOSE 3000
# Start the application
CMD ["node", "src/index.js"]
