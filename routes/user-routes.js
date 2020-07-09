const express = require('express'),
router = express.Router();
const userControllers = require('../controllers/user-controllers');

router.post('/signUp', userControllers.signup);

router.post('/login',userControllers.login);

module.exports =router;