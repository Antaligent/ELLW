const mongoose = require('mongoose');

const QuequeMongooseSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,

});

const QuequeMongooseModel = mongoose.model('Queque', QuequeMongooseSchema);

function createUserQueque(user) {
  const quequeMongoose = new QuequeMongooseModel(user);
  return quequeMongoose.save();
}

function findUserByEmail(email) {
  return QuequeMongooseModel.findOne({ email: email });
}

function findUserById(id) {
  return QuequeMongooseModel.findById(id);
}
function findAllUsers() {
  return QuequeMongooseModel.find();
}

module.exports.findAllUsers = findAllUsers;
module.exports.createUserQueque = createUserQueque;
module.exports.findUserByEmail = findUserByEmail;
module.exports.findUserById = findUserById;