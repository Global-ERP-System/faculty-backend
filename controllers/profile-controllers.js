const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const createProfile = (req,res,next) => {

}

const updateProfile = (req,res,next) => {
  //fullname,address.phoneNumber,BloodGroup,emailId,
  //college,experience,duration
  const {fullName,address,phoneNumber,bloodGroup,emailId} =req.body;


}

exports.createProfile = createProfile;
exports.updateProfile = updateProfile;
