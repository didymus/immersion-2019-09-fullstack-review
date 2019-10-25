const { Router } = require('express');
const db = require('../database/index.js');
const { getReposByUsername } = require('../helpers/github.js');

const reposRouter = Router();

reposRouter.get('/', (req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
  //res.send('hi')
  db.getTop25Repos((repos) => {
    res.json(repos);
  });
});

reposRouter.post('/', (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  getReposByUsername(username, (githubObject) => {
    db.saveRepo(githubObject);
  });
  //res.end();
});

module.exports = {
  reposRouter,
};
