FROM node:lts

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Astro dev server port
EXPOSE 4321

# Run Astro in dev mode
CMD ["npm", "run", "dev"]
