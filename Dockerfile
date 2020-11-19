FROM node as prod

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

WORKDIR /app/client

COPY ./client/package.json ./

COPY yarn.lock ./

RUN yarn

WORKDIR /app

COPY . .

ENV NODE_ENV=production

CMD [ "yarn", "client-web" ]
