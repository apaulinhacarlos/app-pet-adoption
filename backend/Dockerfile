FROM node:20-alpine

WORKDIR /app-backend

COPY package*.json .

RUN npm clean-install

COPY . . 

EXPOSE 3001

CMD [ "npm", "run", "start" ]