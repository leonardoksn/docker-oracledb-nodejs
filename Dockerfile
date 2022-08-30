FROM ghcr.io/oracle/oraclelinux7-nodejs:16-oracledb-20220706

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY ./dist .

EXPOSE 3000

CMD ["npm","run","deploy"]