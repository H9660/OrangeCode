# Here From is used to add the base operating system. Now here for some images it could be directly linux, ubuntu etc but for this case its NODE. The reason why this works is because it uses a prebuilt image of NODE in docker registry which has all the dependencies and the underlying os installed
FROM node:22.0.0

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy frontend files
COPY . .

# Expose ports
EXPOSE 3000
EXPOSE 5000

# Start the servers using npm run dev
CMD ["npm", "run", "dev"]
