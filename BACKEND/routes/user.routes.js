const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerUser } = require('../controllers/register-user.controller');
const { getUser } = require('../controllers/get-user.controller');
const { getAllUsers } = require('../controllers/get-all-users.controller');
const { findUserByEmail } = require('../models/users.repository');

const router = express.Router();

// Endpoint de login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Credenciales inválidas');
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, 'tu_secreto', { expiresIn: '24h' });
  res.status(200).json({ token, role: user.role });
});

// Middleware para verificar el token JWT
function verificarToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send('Token no proporcionado');
  }

  try {
    const decoded = jwt.verify(token, 'tu_secreto');
    req.userId = decoded.userId;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    return res.status(401).send('Token inválido');
  }
}

// Rutas para manejar usuarios
router.get('/:email', getUser);
router.post('/register', registerUser);
router.get('/', getAllUsers);

module.exports = {
  usersRouter: router,
};
