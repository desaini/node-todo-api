const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err) {
    return console.log(err);
  }
  console.log('connected to db');

  db.collection('Todos').insertOne({
    text: 'Do something',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to add todo');
    }

    console.log(JSON.stringify(result.ops));
  });

  db.collection('Users').insertOne({
    name: 'Ram',
    age: 20,
    location: 'KKR'
  }, (err, result) => {
    if(err)
      return console.log('Unable to add user');

    console.log(JSON.stringify(result.ops));
  })

  db.close();
});
