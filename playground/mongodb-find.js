//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//   db.collection('Todos').find({
//     _id: new ObjectID('5b9b50e46c709c83fb91b5ed')
//   }).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
//   },(err)=>{
//     console.log('unable to fetch todos',err);
//   });

// db.collection('Todos').find().count().then((count)=>{
// console.log(`Todos count: ${count}`);
//
// },(err)=>{
//   console.log('unable to fetch todos',err);
// });

db.collection('Users').find({name:'navs'}).toArray().then((docs)=>{
  console.log('Users');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('unable to find users',err);
});
//  db.close();
});
