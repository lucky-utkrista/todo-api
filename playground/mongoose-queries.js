const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b9de34931df8e1b48137719';
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
// _id: id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
// _id: id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });
var id = '5b9b7d84c545e93ec4c3b389';

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID',todo);
// }).catch((e)=> console.log(e));
User.findById(id).then((user)=>{
  if(!user){
    return console.log('User do not exist');
  }
  console.log('User Info:',user);
}).catch((e)=> console.log(e));
