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
    
    regLec.rollNos = [...regLec.rollNos,rollNos],
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

  const  {currentRegLecAttendance }= Academics.regLec;
  const {currentExtraLecAttendance} = Academics.extraLec;
  const  {currentAttendance }= Academics.viewStudents;

  let presentDaysArrayRegLec = currentRegLecAttendance.present;
  let presentDays = currentAttendance.presentDays;
  let absentdays = currentAttendance.absentDays;

  presentDaysArrayRegLec .map( p => {
    if(p.value === true){
      presentDays +=1;
    }else{
      absentStudents +=1;
    }
  })

  let presentDaysArrayExtraLec = currentExtraLecAttendance.present;
  presentDaysArrayExtraLec.map( p => {
    if(p.value === true){
      presentDays +=1;
    }else{
      absentStudents +=1;
    }
  })

  currentAttendance.presentDays = presentDays;
  currentAttendance.absentDays = absentDays;
  currentAttendance.attendance = Math.floor((presentdays)*(100)/(presentdays + absentdays));

  try{
    await currentAttendance.save();
  }catch(err){
    const error = new HttpError(
      'fetching attendance failed, please try agian later.',
      500
    );
    return next(error);
  }
  res.status(200).json({currentAttendance : currentAttendance});
    
}

  // let attendance = 0;

// const getTimeTable = (req,res,next)=>{

// };

// exports.getrollNos = getrollNos;
exports.postAttendanceByRegLec = postAttendanceByRegLec;
exports.postAttendanceByExtraLec = postAttendanceByExtraLec;
exports.postAttendanceByViewStudents = postAttendanceByViewStudents;
exports.getAttendanceByViewStudents =getAttendanceByViewStudents;