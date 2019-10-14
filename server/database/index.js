const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost/fetcher';
// TODO: Put the field you are gonna use to sort the repos by.
// Your schema should have this field.
const SORTING_BY_FIELD = '';

mongoose.connect(DB_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Failed to connect to database', err));

const repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String, // this will be owner.login
  description: String, // rest are same
  html_url: String,
  repos_url: String,
});

const Repo = mongoose.model('Repo', repoSchema);

const saveRepo = () => {
  // TODO: Your code here
  // This function should save a repo to the MongoDB

  // make a collection (array?)
  // parse the repo?
  // loop through parsed repos?
};

const getTop25Repos = () => {
  // TODO: Your code here
  // This function should get the repos from mongo
  // Repo.find(something)
};

module.exports.SORTING_BY_FIELD = SORTING_BY_FIELD;
module.exports.saveRepo = saveRepo;
module.exports.getTop25Repos = getTop25Repos;
