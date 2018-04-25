//library imports
var express =  require('express');
var bodyParser = require('body-parser');

//local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

//CRUD : Create Read Update and Delete
app.post('/todos', (req, res) => {
  //on récupère les données POST
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed
  });
  //on les enregistre dans la database
  //et on les renvoie au client
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
