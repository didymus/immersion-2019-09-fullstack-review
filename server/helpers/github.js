const axios = require('axios');
const config = require('../config');
const db = require('../database');
// const testData = require('../data.json');


const getReposByUsername = (username, callback) => {
  // TODO: Use the axios module to get repos for a specific user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  const options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.GITHUB_TOKEN}`,
    },
  };
  // https://developer.github.com/v3/#user-agent-required

  // axios.get(options.url, (err, githubObject) => {
  //   if (err) {
  //     console.log('Error in API GET: ', err);
  //   } else {
  //     callback(githubObject);
  //   }
  // });
  axios.get(options.url, options.headers).then((githubObject => {
  //console.log('************', githubObject);
  //githubObject;
  db.saveRepo(githubObject);
  })).catch((err) => {
    console.log('Error in API GET: ', err);
  })
};

module.exports.getReposByUsername = getReposByUsername;
