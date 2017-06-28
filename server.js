const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

// // static page, static json
// app.get('/', (req, res) => {
//   //res.send('<h1>Hello Express!</h1>');
//   res.send({
//     name: 'Dan',
//     pets: ["Emma", "Tommy", "Brian", "Lily"]
//   });
// });

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my Home Page!'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
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
