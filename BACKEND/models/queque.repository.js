const mongoose = require('mongoose');

const QuequeMongooseSchema = new mongoose.Schema({
  email: String,
  content: String,

});

const QuequeMongooseModel = mongoose.model('Issue', QuequeMongooseSchema);

function createUserQueque(user) {
  const quequeMongoose = new QuequeMongooseModel(user);
  return quequeMongoose.save();
}


module.exports.createUserQueque = createUserQueque;
