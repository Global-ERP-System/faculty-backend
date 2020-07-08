const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Academics = require('../models/academicsSchema');

//get the rollnos as soon as class 6E is clicked
// const getrollNos =(req,res,next) =>{
//   const rollNoId = req.params.rollNoId;

// }


const postAttendanceByRegLec = async (req,res,next) => {
  const errors= validationResult(req);
  if(!errors.isEmpty()){
    return next(
      new HttpError('Invalid inputs passed , please check your data ',422)
    );
  }
  const {rollNos,present,absent} = req.body;

  const createRegLecture = new Academics({
    regLec.rollNos = new Array(regLec.rollNos,rollNos),
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
  const {rollNos,present,absent} = req.body;

  const createExtraLecture = new AnimationPlaybackEvent({
    extraLec.rollNos = new Array(extraLec.rollNos,rollNos),
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
  const vsaid = req.params.vsaid;

  let presentdays = 0;
  let absentdays =0; 
  // Academics.viewStudents.present.find ((p) => {
  //   if(p.value === true){
  //     presentStudents +=1;
  //   }else{
  //     absentStudents +=1;
  //   }
  // })

  // let attendance = 0;

};
// const getTimeTable = (req,res,next)=>{

// };

// exports.getrollNos = getrollNos;
exports.postAttendanceByRegLec = postAttendanceByRegLec;
exports.postAttendanceByExtraLec = postAttendanceByExtraLec;
exports.postAttendanceByViewStudents = postAttendanceByViewStudents;
exports.getAttendanceByViewStudents =getAttendanceByViewStudents;