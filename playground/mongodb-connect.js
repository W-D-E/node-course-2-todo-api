const {MongoClient, ObjectID} = require('mongodb'); // required to connect to the database


// const MongoClient = require('mongodb').MongoClient; // required to connect to the database

//let's do this
//two arg: 1. a string :  the URL where the database lives.
//         2. a callback function with 2 args. err, and the db object used to read and write data
//mongodb protocol to connect to a mongodb database
//no need to create the database before using it but
//mongo is not creating the database until we start adding data to it
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
  return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

//call the collection and start using right away, no need to create it
//insertOne to insert a new document into a collection: 2 args,
//1. the oject with the key value pairs that will be in the document
//2. Callback function fired when things fail or go well with 2 args: err
//and result, provided things went well of course
// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) => {
//   if(err) {
//     return console.log('Unable to insert todo');
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2))
//   //the ops attribute is going to store all the documents that were inserted
// });

db.collection('Users').insertOne({
  name: 'Warren',
  age: 29,
  location: 'Gagny'

}, (err, result) => {
  if(err) {
    return console.log('Unable to insert User');
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
});


db.close();
});
