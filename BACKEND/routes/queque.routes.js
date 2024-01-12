const express = require('express');
const { registerUser } = require('../controllers/Quequeregister.controller');
const { getUser } = require('../controllers/Quequeget-user.controller');
const { getAllUsers } = require('../controllers/Quequeget-allusers.controller');

const router = express.Router();

router.get('/:email', getUser);

router.post('/register', registerUser);
router.get('/get', getAllUsers);

module.exports.quequeRouter = router;