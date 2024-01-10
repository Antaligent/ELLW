const { findAllUsers } = require('../models/users.repository');

async function getAllUsers(req, res) {
  try {
    const users = await findAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error retrieving users');
  }
}

module.exports.getAllUsers = getAllUsers;
