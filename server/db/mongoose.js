var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const options = {
  useMongoClient: true,
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',options)
  .then(db => console.log(' Connect to the database successfully'))
  .catch(error => console.log('Connect to database failed'));


module.exports ={mongoose};
