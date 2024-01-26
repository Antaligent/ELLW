const { createUser, findUserByEmail } = require('../models/users.repository');

async function registerUser(req, res) {
  const { email, password, parcela, dni, phone } = req.body;

  const foundUser = await findUserByEmail(email);
  if (foundUser) {
    return res.status(400).send('Usuario ya existe');
  }

  try {
    const newUser = await createUser({ email, password, parcela, dni, phone });
    const userResponse = newUser.toObject();
    delete userResponse.password; // No devolver la contraseña
    return res.status(201).json(userResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error creando un nuevo usuario');
  }
}

module.exports = {
  registerUser,
};
