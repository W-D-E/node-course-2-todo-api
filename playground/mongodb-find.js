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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5adb553fecf84052becf7809') //correc way to search by _id
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos :', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos :', err)
  // });

  db.collection('Users').find({
    name: "Jessica"
  }).toArray().then((user) => {
    console.log(JSON.stringify(user, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch user :', err);
  });


// db.close();
});
