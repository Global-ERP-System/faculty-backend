const express = require('express'),
router = express.Router();

const homeControllers = require('../controllers/home-controllers');

router.get('/studentInternshipDetails/:classId', homeControllers.getInternshipDetails);

module.exports =router;