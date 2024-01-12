const { createUserQueque} = require('../models/queque.repository');

async function registerIssue(req, res) {
  console.log(req.body);
  console.log(req.headers);

  const { email, content } = req.body;
  
  // Crear un nuevo usuario con los datos proporcionados
  try {
    const newIssue = await createUserQueque({ email, content });
    return res.status(201).json(newIssue);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error creating new issue');
  }
}

module.exports.registerIssue = registerIssue;
