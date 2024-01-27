FROM --platform=linux/amd64 node:16.17.0-alpine AS builder

# ENV NODE_ENV production

WORKDIR /app
COPY package* ./ 
RUN npm install
RUN npm i -g pm2

COPY . .
EXPOSE 4000


ENTRYPOINT [ "pm2-runtime", "start", "backend/server.js" ]

