// Dependencies
var express = require('express'),
    router = express.Router();

// Models
var Todo = require('../models/todo');

// Routes
Todo.methods(['get', 'post', 'put', 'delete']);
Todo.register(router, '/todo')

module.exports = router;
