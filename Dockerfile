FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY src src/
COPY .babelrc .
COPY ${ENV_FILE} .
COPY package.json .
COPY pm2.json .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
RUN npm install babel-cli
RUN echo ${PORT}

# Expose the listening port of your app
EXPOSE ${PORT}

CMD ["pm2-runtime", "start", "pm2.json"]