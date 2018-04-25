var mongoose = require('mongoose');

//setting up mongoose to use promises
mongoose.Promise = global.Promise;
//connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp');
