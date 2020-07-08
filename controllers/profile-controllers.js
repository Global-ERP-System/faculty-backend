const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Profile = require('../models/profileSchema');

const createProfile = (req,res,next) => {

}

const updateProfile = async (req,res,next) => {
  const errors= validationResult(req);
  if(!errors.isEmpty()){
    return next(
      new HttpError('Invalid inputs passed , please check your data ',422)
    );
  }
  
  const {fullName,address,phoneNumber,bloodGroup,emailId} =req.body;
  const profileId = req.params.profid;

  let updatedProfile;
  try{
     updatedProfile = await updateProfile.findById(profileId);
  }catch(err){
    const error = new HttpError(
      'something went wrong, couldnt update place',500
    );
    return next(error);
  }
  updatedProfile.fullName = fullName;
  updatedProfile.address = address;
  updatedProfile.phoneNumber = phoneNumber;
  updatedProfile.bloodGroup = bloodGroup;
  updatedProfile.emailId = emailId; 
  
  try{
    await Profile.save();
  }catch(err){
    const error = new HttpError(
      'Something went wrong,couldnt update profile',500
    );
    return next(error);
  }

  res.status(200).json({profile : updateProfile});

}

exports.createProfile = createProfile;
exports.updateProfile = updateProfile;
