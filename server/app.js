const path = require('path');
const express = require('express');

const { reposRouter } = require('./api/repos');

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();

app.use(express.static(CLIENT_PATH));
app.use('/api/repos', reposRouter);

module.exports = {
  app,
};

// middleware