var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',options).then(()=>{
  console.log("Mongo db is connected");
}).catch(err =>{
  console.log("unsuccessful");
});

module.exports ={mongoose};
