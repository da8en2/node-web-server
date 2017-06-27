const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Dan',
    pets: ["Emma", "Tommy", "Brian", "Lily"]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error fullfilling this request',
    reason: 'undefined exception'
  });
});

app.listen(3000, () => {
  console.log('Server is running on Port 3000');
});
