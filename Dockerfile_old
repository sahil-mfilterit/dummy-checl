# Use official Node.js runtime
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose port (change if your app uses different port)
EXPOSE 4000

# Start the app
CMD ["node", "index.js"]