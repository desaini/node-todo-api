var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ToDoApp', {useMongoClient: true});

mongoose.Promise = global.Promise;


module.exports = { mongoose };
