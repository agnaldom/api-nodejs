FROM node:9.11.1-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install 

COPY . /app

# needs a mongoinstance - defaults to container linking with alias 'mongo
ENV DEPLOY_METHOD=docker \
    MODE_ENV=production \
    MONGO_URL=mongodb://mongo:27017/noderest \
    HOME=/tmp \
    PORT=3000 \
    ROOT_URL=http://localhost:3000 

EXPOSE 3000

CMD [ "node", "src/index.js"]

