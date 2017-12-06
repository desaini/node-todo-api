const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err) {
    return console.log(err);
  }
  // db.collection('Todos').deleteMany({text:'Do something'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text:"eat food"}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({text:"eat food"}).then((result)=> {
  //   console.log(result);
  // })

  // db.collection('Users').findOneAndDelete({name:"Ramu"}).then((result)=>{
  //   console.log(result);
  // })
  db.collection('Users').deleteMany({name:"Ramu"}).then((result)=>{
    console.log(result);
  })

  //db.close();
});
