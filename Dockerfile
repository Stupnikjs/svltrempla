# dont forget import adapter from '@sveltejs/adapter-node' in svelte config;
# https://gist.github.com/aradalvand/04b2cad14b00e5ffe8ec96a3afbb34fb

FROM node:18 AS builder

WORKDIR /app

COPY package*.json .

#replace npm install in production env 
RUN npm ci

#copy all the remaining file from the host to the cointainer
COPY . .

RUN npm run build 

#removes extrenal packages 
RUN npm prune --prodution 


FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000

ENV VITE_API_URL=https://de-zoom-gsnolkapya-od.a.run.app
ENV NODE_ENV=production

CMD ["node", "build"]