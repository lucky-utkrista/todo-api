//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('5b9b66a76c709c83fb91bec0')
// },{
//   $set:{
//     completed: true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5b9b4dbadad63f242419026f')
},{
  $set:{
    name: 'navaraj',

},
  $inc : {
    age:5
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});

//  db.close();
});
