const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Academics = require('../models/academicsSchema');

const postAttendanceByRegLec = async (req,res,next) => {
  const errors= validationResult(req);
  if(!errors.isEmpty()){
    return next(
      new HttpError('Invalid inputs passed , please check your data ',422)
    );
  }
  const {rollnos,present,absent} = req.body;

  const createRegLecture = new Academics({
    regLec.rollnos = new Array(regLec.rollnos,rollnos),
    regLec.present = new Array(regLec.present,present),
    regLec.absent = new Array(regLec.absent,absent),
  })
  try{
    await createRegLecture.save();
  }catch(err){
    const error = new HttpError(
      'creating reg lec failed,please try again',
      500
    );
    return next(error);
  }
  
  res.status(201).json({regLec:createRegLecture});
};

const postAttendanceByExtraLec = (req,res,next) => {
  const errors= validationResult(req);
  if(!errors.isEmpty()){
    return next(
      new HttpError('Invalid inputs passed , please check your data ',422)
    );
  }
  const {rollnos,present,absent} = req.body;

  const createExtraLecture = new AnimationPlaybackEvent({
    extraLec.rollnos = new Array(extraLec.rollnos,rollnos),
    extraLec.present = new Array(extraLec.present,present),
    extraLec.absent = new Array(extraLec.absent,absent),
  })

  try{
    await createExtLecture.save();
  }catch(err){
    const error = new HttpError(
      'creating reg lec failed,please try again',
      500
    );
    return next(error);
  }
  
  res.status(201).json({regLec:createExtLecture});
};

const getAttendanceByViewStudents = (req,res,next) => {
  Academics.viewStudents.find({},(err,students)=>{
    if (err) {
      console.log(err);
      
    } else {
      console.log(students);
      
    }
  });
};
// const getTimeTable = (req,res,next)=>{

// };

exports.postAttendanceByRegLec = postAttendanceByRegLec;
exports.postAttendanceByExtraLec = postAttendanceByExtraLec;
exports.postAttendanceByViewStudents = postAttendanceByViewStudents;
exports.getAttendanceByViewStudents =getAttendanceByViewStudents;