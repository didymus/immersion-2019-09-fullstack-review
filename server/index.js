const path = require('path');
const dotenv = require('dotenv');
const helpers = require('../helpers/github.js');
const db = require('../database/index.js');
const express = require('express');
const bodyParser = require('body-parser');

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const express = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../client/dist')); // serves

const { app } = require('./app');

const PORT = 8080;

express.post('/repos', (req, res) => {
helpers.getReposByUsername(req.body.data, (githubObject) => {
  db.saveRepo(githubObject);
});
res.end('Saved');
});

express.get('/repos', (repos) => {
  res.json(repos);
})

express.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});
