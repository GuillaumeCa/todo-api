var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  checked: Boolean
});

module.exports = restful.model('Todo', todoSchema);
