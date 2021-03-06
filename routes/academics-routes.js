const express= require('express');

const academicsControllers = require('../controllers/academics-controllers');

const router = express.Router();


// router.get('/timetable',academicsControllers.getTimetable);

//connect it to principal database
// router.get('/attendance/rollnos/:rollNoId',academicsControllers.getRollnos);

router.post('/attendance/regLec',academicsControllers.postAttendanceByRegLec);

router.post('/attendance/extraLec',academicsControllers.postAttendanceByExtraLec);

//vsaid: view studnets attendance id
router.get('/attendance/viewStudents/:dateId',academicsControllers.getAttendanceByViewStudents);

router.post('/examMarks',academicsControllers.postExamMarks);

module.exports = router;