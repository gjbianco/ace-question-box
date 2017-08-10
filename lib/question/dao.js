const redis = require('redis').createClient();
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/acequestions';
var collection;

MongoClient.connect(url, (err, db) => {
  if(err) {
    console.log('error connecting to mongo:', err);
  } else {
    console.log('successfully connected to mongo');
    collection = db.collection('questions');
  }
});

module.exports = {
  getCollection: () => collection
};