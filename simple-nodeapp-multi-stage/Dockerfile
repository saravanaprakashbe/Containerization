FROM node:alpine

LABEL MAINTAINER "Saravanaprakash Thangavel "

WORKDIR /app

COPY  main.js /app
COPY package.json /app

RUN ["npm","install"]
ENTRYPOINT ["npm"]
CMD ["start"]

EXPOSE 8000
