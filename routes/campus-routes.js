const express= require('express'),
router = express.Router(),
campusControllers = require('../controllers/campus-controllers');

router.post('/assignments',campusControllers.postAssignment);
router.patch('/assignments/:asmId',campusControllers.updateAssignment);
router.delete('/assignments/:asmId',campusControllers.deleteAssignment);

module.exports = router;