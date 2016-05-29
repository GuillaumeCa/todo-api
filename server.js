// Dependencies
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/todo-api');

// Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.url);
  next();
})

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API running on port 3000');
