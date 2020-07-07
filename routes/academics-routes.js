const express= require('express');

const academicsControllers = require('../controllers/academics-controllers');

const router = express.Router();


// router.get('/timetable',academicsControllers.getTimetable);

router.post('/attendance/regLec',academicsControllers.postAttendanceByRegLec);

router.post('/attendance/extraLec',academicsControllers.postAttendanceByRegLec);

//vsaid: view studnets attendance id
router.get('/attendance/viewStudents/:vsaid',academicsControllers.postAttendanceByRegLec);


module.exports = router;