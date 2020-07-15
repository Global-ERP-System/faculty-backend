const express= require('express'),
router = express.Router(),
campusControllers = require('../controllers/campus-controllers');


router.post('/assignments',campusControllers.postAssignment);




module.exports = router;