//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//   db.collection('Todos').insertOne({
// text: 'something to do',
// completed: false
//   },(err,result)=>{
//     if(err)
//     {
//       return console.log('unable to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//   });
//insert new doc into users{name,age,location}
// db.collection('Users').insertOne({
//   name:'utkrista',
//   age: 22,
//   location: 'new baneshwor'
// },(err,result)=>{
//   if(err){
//       return console.log('unable to insert users',err);
//   }
// console.log(JSON.stringify(result.ops,undefined,3));
// });
  db.close();
});
