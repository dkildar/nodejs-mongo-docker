FROM node:8-alpine

ENV PROJECT_DIR /root/backend/

ENV SERVER_PORT 8000
EXPOSE $SERVER_PORT

RUN mkdir $PROJECT_DIR
COPY . $PROJECT_DIR

WORKDIR $PROJECT_DIR

RUN npm install

RUN npm run build

CMD node dist
