const express= require('express');

const academicsControllers = require('../controllers/academics-controllers');

const router = express.Router();

router.post('/attendance/regLec',academicsControllers.postAttendanceByRegLec);

router.post('/attendance/extraLec',academicsControllers.postAttendanceByRegLec);

router.post('/attendance/viewStudnets',academicsControllers.postAttendanceByRegLec);



module.exports = router;