FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install
#copying the schema.prisma file to prisma folder inside the container
COPY prisma/schema.prisma ./prisma/
#after copying the schema file, then we can generate a prisma client(the prisma package) that will allow us to interact with the database
RUN npx prisma generate

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]