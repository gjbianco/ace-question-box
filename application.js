const express = require('express');
const questionRoutes = require('./lib/question/routes');

const app = express();

app.use('/', express.static('www'));

app.use('/question', questionRoutes());

app.listen(8080, '0.0.0.0', () => {
  console.log('listening on port 8080');
});