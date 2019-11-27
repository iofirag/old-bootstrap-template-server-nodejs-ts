# web-service Dockerfile

FROM node
# Create app directory
WORKDIR /usr/src/app

# Copy app source code
COPY package*.json .
# COPY . .
# Install app dependencies
RUN npm install 
# --unsafe-perm=true --allow-root

COPY ./praypayserver .

#Expose port and start application
EXPOSE 3000

CMD [ "npm", "start" ] 
# ts-node src/index.ts localhost 8080