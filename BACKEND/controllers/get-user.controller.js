const { findUserByEmail } = require('../models/users.repository');

async function getUser(req, res) {
  console.log(req.params);
  console.log(req.headers);
  const userEmail = req.params.email;
  const user = await findUserByEmail(userEmail);
  if (!user) {
    return res.status(400).send('User does not exist');
  }
  res.json(user);
}

module.exports.getUser = getUser;