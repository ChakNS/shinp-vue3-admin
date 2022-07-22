FROM node:16.15.1-buster AS BASE
LABEL name="shinp-vue3-admin"
LABEL version="1.0.0"
WORKDIR /workspace
ADD . .
RUN npm install -g pnpm
RUN pnpm install \
    && pnpm build

FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY /docker/nginx.conf /etc/nginx/conf.d/
COPY --from=BASE /workspace/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]