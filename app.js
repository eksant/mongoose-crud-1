var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect(`mongodb://localhost:27017/platinum`, err => {
  if (!err) console.log('connected to local mongo')
  else console.error(err.message)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/books', require('./routes/books'));
app.use('/api/customers', require('./routes/customers'));

module.exports = app;
