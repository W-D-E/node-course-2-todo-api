const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5ae1f039a2dbc3e4628834d911';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// }

// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });// return une array vide si zéro trouvé
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('One todo: ', todo);
// });// return null si zéro trouvé


// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo By Id: ', todo);
// }).catch((e) => {
//   console.log(e);
// });// return null si zéro trouvé

var id2 = '5adf228b767aa4441c622b8a';
if (!ObjectID.isValid(id2)) {
  console.log('ID not valid.');

}

User.findById(id2).then((user) => {

  if (!user) {
    return console.log('User not found.');
  }
  console.log('User found: ', user);
}).catch((e) => {
  console.log(e);
});
