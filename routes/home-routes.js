const express = require('express'),
router = express.Router();

const homeControllers = require('../controllers/home-controllers');

router.get('/studentInternshipDetails/:classId', homeControllers.getInternshipDetails);
router.post('/raisereq/application',homeControllers.postApplication);
router.post('/raisereq/report',homeControllers.postReport);
router.post('/raisereq/document',homeControllers.postDocument);
router.get('/feedback/:feedId',homeControllers.getFeedback);
router.post('/appreciations',homeControllers.postAppreciations);
// router.get('/salary/:salid',homeControllers.getSalaryDetails);

module.exports =router;