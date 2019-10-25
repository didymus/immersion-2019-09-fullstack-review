const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const helpers = require('./helpers/github.js');
const db = require('./database/index.js');
const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist')); // serves

//const { app } = require('./app');

const PORT = 8080;

app.post('/repos', (req, res) => {
  //req.body.username
  helpers.getReposByUsername(req.body.username);
});

app.get('/repos', (req, res) => {
  db.getTop25Repos((repos) => {
    res.json(repos);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});
