const express= require('express');

const profileControllers = require('../controllers/profile-controllers');


const router = express.Router();

router.post('/',profileControllers.createProfile);

router.patch('/',profileControllers.updateProfile);

module.exports = router;
