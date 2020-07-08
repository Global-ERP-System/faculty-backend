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

  const  d = new Date();
 
  const  date = d.getDate();
  const  month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  const  year = d.getFullYear();
 
  const  dateStr = date  + month  + year;

  const createRegLecture = new Academics({
    
    date: {regLec :{rollNos: rollNos}},//.regLec.rollNos = new Array(date.regLec.rollNos,rollNos),
    date:{regLec : {present: present}},//.regLec.present = new Array(date.regLec.present,present),
    date:{regLec:{absent:absent}},//.regLec.absent = new Array(date.regLec.absent,absent),
    date : dateStr

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
  
  res.status(201).json({regLec:createRegLecture.toObject({getters:true})});
};

const postAttendanceByExtraLec = async (req,res,next) => {
  const errors= validationResult(req);
  if(!errors.isEmpty()){
    return next(
      new HttpError('Invalid inputs passed , please check your data ',422)
    );
  }
  const {rollNos,present,absent} = req.body;

  const  d = new Date();
 
  const  date = d.getDate();
  const  month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  const  year = d.getFullYear();
 
  const  dateStr = date  + month  + year;

  const createExtraLecture = new Academics({
    date: {regLec :{rollNos: rollNos}},
    date:{regLec : {present: present}},
    date:{regLec:{absent:absent}},
    date : dateStr
  })

  try{
    await createExtraLecture.save();
  }catch(err){
    const error = new HttpError(
      'creating reg lec failed,please try again',
      500
    );
    return next(error);
  }
  
  res.status(201).json({regLec:createExtLecture.toObject({getters:true})});
};

const getAttendanceByViewStudents = async (req,res,next) => {
  const dateId = req.params.dateId;

  let attendance;
  try{
    attendance = await Academics.find(a =>a.date === dateId); 
  }catch(err){
    const error = new HttpError(
      'getting attendance failed,please try again',
      500
    );
    return next(error);
  }

  const  {currentRegLecAttendance }= attendance.regLec;
  const {currentExtraLecAttendance} = attendance.extraLec;
  const  {currentAttendance }= attendance.viewStudents;

  let presentDaysArrayRegLec = currentRegLecAttendance.present;
  let presentDays = currentAttendance.presentDays;
  let absentDays = currentAttendance.absentDays;

  presentDaysArrayRegLec .map( p => {
    if(p.value === true){
      presentDays +=1;
    }else{
      absentDays +=1;
    }
  })

  let presentDaysArrayExtraLec = currentExtraLecAttendance.present;
  presentDaysArrayExtraLec.map( p => {
    if(p.value === true){
      presentDays +=1;
    }else{
      absentDays +=1;
    }
  })

  currentAttendance.presentDays = presentDays;
  currentAttendance.absentDays = absentDays;
  currentAttendance.attendance = Math.floor((presentdays)*(100)/(presentdays + absentdays));

  try{
    await attendance.save();
  }catch(err){
    const error = new HttpError(
      'fetching attendance failed, please try agian later.',
      500
    );
    return next(error);
  }
  res.status(200).json({attendance : attendance});
    
}

  // let attendance = 0;

// const getTimeTable = (req,res,next)=>{

// };

// exports.getrollNos = getrollNos;
exports.postAttendanceByRegLec = postAttendanceByRegLec;
exports.postAttendanceByExtraLec = postAttendanceByExtraLec;
exports.getAttendanceByViewStudents =getAttendanceByViewStudents;