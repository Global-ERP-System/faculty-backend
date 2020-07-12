const express = require('express'),
router = express.Router();

const homeControllers = require('../controllers/home-controllers');

router.get('/studentInternshipDetails/:classId', homeControllers.getInternshipDetails);
router.post('/raisereq/application',homeControllers.postApplication);
router.post('/raisereq/report',homeControllers.postReport);

module.exports =router;