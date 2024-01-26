const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserMongooseSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true }, // Asegurándose de que el email sea único
  password: String,
  parcela: Number,
  dni: String,
  phone: Number,
  role: String,
});

// Hashear la contraseña antes de guardarla en la base de datos
UserMongooseSchema.pre('save', async function (next) {
  // Solo hashear la contraseña si ha sido modificada (o es nueva)
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// Método para comparar la contraseña ingresada con la hasheada
UserMongooseSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const UserMongooseModel = mongoose.model('User', UserMongooseSchema);

function createUser(user) {
  const newUser = new UserMongooseModel(user);
  return newUser.save();
}

function findUserByEmail(email) {
  return UserMongooseModel.findOne({ email });
}

function findUserById(id) {
  return UserMongooseModel.findById(id);
}

function findAllUsers() {
  return UserMongooseModel.find();
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  findAllUsers,
};
