const HttpError = require('../models/http-error');
const userSchema = require('../models/userSchema');
const  mongoose  = require('mongoose');
// const { validationResult } = require('express-validator');

const signup = async (req,res,next)=>{
  //   const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return next(
  //     new HttpError('Invalid inputs passed, please check your data.', 422)
  //   );
  // }
  const {username,password,email} = req.body;

  let existingUser;
  try{
    existingUser = await userSchema.findOne( {email: email})
  }catch(err){
    const error = new HttpError(
      'Something went wrong,couldnt signup',500
    );
    return next(error);
  }

  if(existingUser){
    const error = new HttpError(
      'user exists already ,please login instead',
      422
    );
    return next(error);
  }
  
  const newUser = new userSchema ({
    username,
    email,
    password
  }) 

  // try{
  //   await newUser.save();
  // }catch(err){
  //   const error = new HttpError(
  //     'creating user failed , please try again',500
  //   );
  //   return next(error);
  // }

  newUser.save()
  .then(function( data) {
    console.log(data); 
})
.catch(function(error){
 console.log(error);
});

  res.status(201).json({user:newUser.toObject({getters: true})});
  
}

const login = async (req,res,next) => {
  const {email,password} = req.body;
  let existingUser;
  try{
    existingUser = await userSchema.findOne( {email: email})
  }catch(err){
    const error = new HttpError(
      'Something went wrong,couldnt login',500
    );
    return next(error);
  }

  if(!existingUser || existingUser.password !== password){
    const error = new HttpError(
      'Invalid credentials ,coulndt log you in ',
      401
    );
    return next(error);
  }

  res.json({message:'Logged in!'});
};


exports.signup = signup;
exports.login = login;
