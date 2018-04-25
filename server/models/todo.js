var mongoose = require('mongoose');
//Creating a mongoose model to tell mongoose how to store our data

//takes 2 args: str name, obj() various properties for our model
//mongoose with lowercase and pluralise the name of the collection
var Todo = mongoose.model('Todo', {
  text: {
    type: String, // les Boolean et Number sont transformés en string
    required: true,
    minlength: 1,
    trim: true // retire les expaces avant et après la string/error si la string est vide
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
