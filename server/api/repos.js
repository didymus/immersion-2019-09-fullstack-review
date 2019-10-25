const { Router } = require('express');
const db = require('../database/index.js');
const { helpers } = require('../helpers/github.js');

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
  // helpers.getReposByUsername(req.body.data, (githubObject) => {
  //   db.save(githubObject);
  // });
  console.log('***************');
  //console.log('req data', req.body);
  res.end();
});

module.exports = {
  reposRouter,
};
