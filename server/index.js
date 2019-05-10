// libraries
const express = require('express');
const app = express()
const port = 1128;
const request = require('request');

// middleware
app.use(express.static(__dirname + '/../client/dist'));

// routes
app.post('/repos', function (req, res) {
  console.log('hello post');
  res.send('Hello post');
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  console.log('hello get');
  res.send('Hello get');
  // TODO - your code here!
  // This route should send back the top 25 repos
});

// listen
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

