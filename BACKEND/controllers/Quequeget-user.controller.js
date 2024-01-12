const { findUserByEmail } = require('../models/queque.repository');

async function getUser(req, res) {
  console.log(req.params);
  console.log(req.headers);
  const userEmail = req.params.email;
  const user = await findUserByEmail(userEmail);
  if (!user) {
    return res.status(400).send('User does not existtt');
  }
  res.json(user);
}

module.exports.getUser = getUser;