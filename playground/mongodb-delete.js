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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Warren'}).then((result) => {
    //   if(result.result.ok === 1) {
    //     console.log(`${result.result.n} documents were deleted.`);
    //     console.log(result);
    //   }
    // });

    db.collection('Users').findOneAndDelete({_id : new ObjectID('5adb30c164159829487206db')})
    .then((result) => {
      console.log(result);
    });
// db.close();
});
