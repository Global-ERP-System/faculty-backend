const express= require('express');
const {check}= require('express-validator');

const profileControllers = require('../controllers/profile-controllers');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.post('/',
fileUpload.single('image'),
  [
    check('fullName').not().isEmpty(),
    check('address').not().isEmpty(),
    check('registration').not().isEmpty(),
    check('phoneNumber').isLength({min:10}),
    check('bloodGroup').not().isEmpty(),
    check('campusCode').not().isEmpty(),
    check('emailId').normalizeEmail().isEmail(),
    check('college').not().isEmpty(),
    check('experience').not().isEmpty(),
    check('duration').not().isEmpty()
  ],profileControllers.createProfile);

router.patch('/:profid',profileControllers.updateProfile);

module.exports = router;
