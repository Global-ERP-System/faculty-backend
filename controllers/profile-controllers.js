//  const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const profileSchema = require('../models/profileSchema');
const userSchema = require('../models/userSchema');
const  mongoose  = require('mongoose');

const createProfile = async (req,res,next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {

  //   return next(
  //     new HttpError('Invalid inputs passed, please check your data.', 422)
  //   );
  // }
  //should include image also
  const {
    fullName,address,registrationNumber,phoneNumber,bloodGroup,campusCode,emailId,college,experience,duration,creator
  }= req.body;

  const createdProfile = new profileSchema({
    image :  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',//req.file.path,
    fullName,
    address,
    registrationNumber,
    phoneNumber,
    bloodGroup,
    campusCode,
    emailId,
    college,
    experience,
    duration,
    creator
  });

  let user;
  
  try{
    user = await userSchema.findById(creator);
  }catch(err){
    const error= new HttpError(
      'creating user failed,please try again',500
    );
    return next(error);
  }

  if(!user){
    const error = new HttpError('Couldnt find user for provided id',404)
    return next(error);
  }

  try{
    const sess = await mongoose.startSession();
    sess.startTransaction();
    createdProfile.save({session:sess})
  .then(function( data) {
    console.log(data);
    
})
.catch(function(error){
 console.log(error);
});
    user.profile = createdProfile;
     user.save({session:sess})
    .then(function( data) {
      console.log(data);
      
  })
  .catch(function(error){
   console.log(error);
  });
    await sess.commitTransaction();
  }catch (err) {
    const error = new HttpError(
      'Creating profile failed, please try again.',
      500
    );
    return next(error);
  }
// createdProfile.save()
//   .then(function( data) {
//     console.log(data);
    
// })
// .catch(function(error){
//  console.log(error);
// });
  res.status(201).json({ profile: createdProfile.toObject({getters:true}) });

}

const updateProfilebyUserId = async (req,res,next) => {
  // const errors= validationResult(req);
  // if(!errors.isEmpty()){
  //   return next(
  //     new HttpError('Invalid inputs passed , please check your data ',422)
  //   );
  // }
  
  const {fullName,address,phoneNumber,bloodGroup,emailId} =req.body;
  const profileId = req.params.profid;
  console.log(profileId);
  
  let profile;
  try{
    profile = await profileSchema.findById(profileId);
    console.log(profile);
    
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
  
  // let user;
  
  // try{
  //   user = await User.profile.findById(profileId);
  // }catch(err){
  //   const error= new HttpError(
  //     'creating place failed,please try again',500
  //   );
  //   return next(error);
  // }

  // if(!user){
  //   const error = new HttpError('Couldnt find user for provided id',404)
  //   return next(error);
  // }

  // try{
  //   const sess = await mongoose.startSession();
  //   sess.startTransaction();
  //   await  .save({session:sess});
  //   user.profile = profile;
  //   await user.save({session :sess});
  //   await sess.commitTransaction();
  // }catch(err){
  //   const error = new HttpError(
  //     'Something went wrong,couldnt update profile',500
  //   );
  //   return next(error);
  // }

  profile.save()
  .then(function( data) {
    console.log(data); 
})
.catch(function(error){
 console.log(error);
});
 
  res.status(200).json({profile:  profile.toObject({getters:true})});

}

exports.createProfile = createProfile;
exports.updateProfilebyUserId = updateProfilebyUserId;
