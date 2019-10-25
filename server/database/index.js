const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const DB_URI = 'mongodb://localhost/Repo';
// TODO: Put the field you are gonna use to sort the repos by.
// Your schema should have this field.
const SORTING_BY_FIELD = 'name';

mongoose.connect(DB_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Failed to connect to database', err));

const repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String, // this will be owner.login (data.json)
  description: String, // rest are same
  html_url: String,
  repos_url: String,

const Repo = mongoose.model('Repo', repoSchema);

const saveRepo = (githubObject) => {
  // TODO: Your code here
  // This function should save a repo to the MongoDB 
  const repoCollection = [];

  for (let i = 0; i < githubObject.data.length; i++) {
    const repoObj = {};
    repoObj.id = githubObject.data[i].id;
    repoObj.name = githubObject.data[i].owner.login;
    repoObj.description = githubObject.data[i].description;
    repoObj.html_url = githubObject.data[i].html_url;
    repoObj.repos_url = githubObject.data[i].repos_url;
  
    const repo = new Repo(repoObj);

    repo.save((err) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log('Repo was saved!');
      }
    });

    repoCollection.push(repoObj);
  }
};

const getTop25Repos = (callback) => {
  // TODO: Your code here
  // This function should get the repos from mongo
  // Repo.find(something)
  Repo.find((err, repos) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      callback(repos);
    }
  }).limit(25).sort({ 'name': 1 });
};

module.exports.SORTING_BY_FIELD = SORTING_BY_FIELD;
module.exports.saveRepo = saveRepo;
module.exports.getTop25Repos = getTop25Repos;
