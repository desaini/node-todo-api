const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err) {
    return console.log(err);
  }

  // db.collection('Todos').findOneAndUpdate({text:"eat food"}, {$set: {completed:false}}, {}).then((result)=>{
  //   console.log(result);
  // })
  db.collection('Users').findOneAndUpdate({_id:new ObjectID("5a26f66bbdaee3032df62b26")}, {
    $set:{
      name: 'Shamu'
    },
    $inc: {
      age:1
    }
  },{returnOriginal: false}).then((result)=>{
    console.log(this);
  })

  //db.close();
});
