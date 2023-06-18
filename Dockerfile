FROM node:18 AS builder

WORKDIR /app

COPY package*.json .

#replace npm install in production env 
RUN npm ci

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

ENV NODE_ENV=production

CMD ["node", "build"]