const express = require('express');
const { registerUser } = require('../controllers/register-user.controller');
const { getUser } = require('../controllers/get-user.controller');
const { getAllUsers } = require('../controllers/get-all-users.controller');

const router = express.Router();

router.get('/:email', getUser);

router.post('/register', registerUser);
router.get('/', getAllUsers);

module.exports.usersRouter = router;