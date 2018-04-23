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

  //findOneAndUpdate
  //findOneAndUpdate(filter, update, options, callback) or promise if no callback is passed
//   db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5addebe4ecf84052becfac4d")
// }, {
//   //mongodb update operators
//   $set : {
//     completed: true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("5adb5356af0ae625f4fce4be")
  // }, {
  //   $set: {
  //     name: "Warren"
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5adb5356af0ae625f4fce4be")
  }, {
    $inc:{
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });
  
// db.close();
});
