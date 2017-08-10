const express = require('express');
const mongo = require('./dao');
const bodyParser = require('body-parser');
const sanitize = require('sanitize-html');
const sanitizeOpts = {
  allowedTags: [],
  allowedAttributes: []
};

const router = express.Router();

router.post('/', bodyParser.json(), (req, res) => {
  const cleanQuestion = sanitize(req.body.question, sanitizeOpts);
  mongo.getCollection().insert({
    date: new Date(),
    question: cleanQuestion
  })
  .then(function() {
    res.json('Successfully saved question');
  })
  .catch(function(err) {
    console.error('Error saving to mongo:', err);
    res.send(500);
  });
});

module.exports = () => router;