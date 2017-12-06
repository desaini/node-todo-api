const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err) {
    return console.log('Error');
  }

  console.log('connected');

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log(docs);
  // });

  // db.collection('Todos').find({_id: new ObjectID('5a26f66bbdaee3032df62b25')}).toArray().then((docs) => {
  //   console.log(docs);
  // });

  db.collection('Users').find({name: 'Sham'}).toArray().then((docs) => {
    console.log(docs);
  });



});
