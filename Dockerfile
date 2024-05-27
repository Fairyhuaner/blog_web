FROM node:20.3.1 as build-stage
WORKDIR /ttsx
COPY package*.json ./
COPY ./ .

FROM nginx as production-stage
RUN mkdir /ttsx/
COPY --from=build-stage /ttsx/dist /ttsx
COPY nginx.conf /etc/nginx/nginx.conf