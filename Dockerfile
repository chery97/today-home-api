# Build Image
FROM node:18-alpine3.16 AS builder

WORKDIR /usr/src/app

RUN ["npm", "build"]
