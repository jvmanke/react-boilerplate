FROM node:10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

ENV NODE_ENV production
ENV PORT 5000

RUN npm run build
RUN npm run build:server

EXPOSE ${PORT}

CMD [ "npm", "start" ]
