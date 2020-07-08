const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Profile = require('../models/profileSchema');

const createProfile = async (req,res,next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  //shoudl include image also
  const {
    fullName,address,registrationNumber,phoneNumber,bloodGroup,campusCode,emailId,college,experience,duration
  }= req.body;

  const createdProfile = new Profile({
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',
    fullName,
    address,
    registrationNumber,
    phoneNumber,
    bloodGroup,
    campusCode,
    emailId,
    college,
    experience,
    duration
  })
  try{
    await createdProfile.save();
  }catch (err) {
    const error = new HttpError(
      'Creating profile failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ profile: createdProfile });

}

const updateProfilebyId = async (req,res,next) => {
  const errors= validationResult(req);
  if(!errors.isEmpty()){
    return next(
      new HttpError('Invalid inputs passed , please check your data ',422)
    );
  }
  
  const {fullName,address,phoneNumber,bloodGroup,emailId} =req.body;
  const profileId = req.params.profid;

  let profile;
  try{
    profile = Profile.findById(profileId);
  }catch(err){
    const error = new HttpError(
      'Something went wrong, couldnt update profile',500
    );
    return next(error);
  }

  profile.fullName = fullName;
  profile.address = address;
  profile.phoneNumber = phoneNumber;
  profile.bloodGroup = bloodGroup;
  profile.emailId = emailId; 
  
  try{
    await profile.save();
  }catch(err){
    const error = new HttpError(
      'Something went wrong,couldnt update profile',500
    );
    return next(error);
  }

  res.status(200).json({profile: (await profile).toObject({getters:true})});

}

exports.createProfile = createProfile;
exports.updateProfilebyUserId = updateProfilebyUserId;
