const { createUser, findUserByEmail } = require('../models/users.repository');

async function registerUser(req, res) {
  console.log(req.body);
  console.log(req.headers);

  const { email, password } = req.body;

  // Buscar si ya existe un usuario con el mismo correo electrónico
  const foundUser = await findUserByEmail(email);
  if (foundUser) {
    return res.status(400).send('User already exists');
  }

  // Crear un nuevo usuario con los datos proporcionados
  try {
    const newUser = await createUser({ email, password });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error creating new user');
  }
}

module.exports.registerUser = registerUser;
