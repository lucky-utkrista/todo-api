var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

mongoose.connection.on("connected", () => {
    console.log("Connected to database");
});
mongoose.connection.on("error", (err) => {
  console.log("Database error:" + err);
});

module.exports ={mongoose};
