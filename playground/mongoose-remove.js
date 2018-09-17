const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({})
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove
// Todo.findByIdAndRemove('5b9f659aa5c6f2f6b0a52c8d').then((todo)=>{
//   console.log(todo);
// });
//Todo.findByIdAndRemove
Todo.findOneAndRemove({_id:'5b9f6652a5c6f2f6b0a52cda'}).then((todo)=>{
console.log(todo);
});
