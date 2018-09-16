var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp')
.then(() => {
   server.start();
 })
 .catch((err) => {
   console.log('Error on start: ' + err.stack);
   process.exit(1);
 });

module.exports ={mongoose};
