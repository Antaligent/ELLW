const express = require('express');
const { registerIssue } = require('../controllers/post.controller');

const router = express.Router();


router.post('/post', registerIssue);


module.exports.quequeRouter = router;