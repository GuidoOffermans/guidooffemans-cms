FROM node:14-alpine

WORKDIR /payload

COPY . .

RUN yarn

EXPOSE 3100

CMD [ "yarn", "dev" ]