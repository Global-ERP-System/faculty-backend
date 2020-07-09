const HttpError = require('../models/http-error');
const User = require('../models/userSchema'),
passport= require('passport');
const { validationResult } = require('express-validator');

const userSignUpController = async (req,res,next)=>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {

    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const newUser = await new User({
    username : req.body.username,
    email : req.body.email
  })
      User.register(newUser,req.body.password,(err,user)=>{
          if (err) {
              console.log(err);
              
          } else {
              passport.authenticate('local',(req,res)=>{
                res.status(201).json({ user: user.toObject({getters:true}) });

              });
          }
      });
  
}

// const userLoginController = ()=> passport.authenticate('local',{
//     successRedirect : '',
//     failureRedirect : ''
// }),
// (req,res,next)=>{

// }


exports.userSignUpController = userSignUpController;
exports.userLoginController = userLoginController;