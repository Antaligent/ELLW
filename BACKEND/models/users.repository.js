const mongoose = require('mongoose');

const UserMongooseSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,

});

const UserMongooseModel = mongoose.model('User', UserMongooseSchema);

function createUser(user) {
  const userMongoose = new UserMongooseModel(user);
  return userMongoose.save();
}

function findUserByEmail(email) {
  return UserMongooseModel.findOne({ email: email });
}

function findUserById(id) {
  return UserMongooseModel.findById(id);
}
function findAllUsers() {
  return UserMongooseModel.find();
}

module.exports.findAllUsers = findAllUsers;
module.exports.createUser = createUser;
module.exports.findUserByEmail = findUserByEmail;
module.exports.findUserById = findUserById;