FROM node:16
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json .
RUN npm install