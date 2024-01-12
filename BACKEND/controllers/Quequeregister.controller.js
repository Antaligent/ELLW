const { createUserQueque, findUserByEmail } = require('../models/queque.repository');

async function registerUser(req, res) {
  const { username, email, phone } = req.body;
  const foundUser = await findUserByEmail(email);
  if (foundUser) {
    return res.status(400).send('Usuario ya existe con ese correo electrónico');
  }
  try {
    const newUser = await createUserQueque({ username, email, phone });

    const userResponse = {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      phone: newUser.phone
    };

    return res.status(201).json(userResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error al crear el nuevo usuario');
  }
}

module.exports.registerUser = registerUser;
