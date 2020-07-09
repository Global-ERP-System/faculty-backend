//const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const regLecSchema = require('../models/attendanceSchemas/regLecSchema');
const extraLecSchema = require('../models/attendanceSchemas/extraLecSchema');
const viewStudentsSchema = require('../models/attendanceSchemas/viewStudentsSchema');

//get the rollnos as soon as class 6E is clicked
// const getrollNos =(req,res,next) =>{
//   const rollNoId = req.params.rollNoId;

// }


const postAttendanceByRegLec =  async (req,res,next) => {

  // const errors= validationResult(req);
  // if(!errors.isEmpty()){
  //   return next(
  //     new HttpError('Invalid inputs passed , please check your data ',422)
  //   );
  // }
  const {regLec} = req.body;

  const  d = new Date();
 
  const  date = d.getDate();
  const  month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  const  year = d.getFullYear();
 
  const  dateStr = date  + "-" + month + "-"  + year;

  const createRegLecture = new regLecSchema({
    regLec:regLec,
    date : dateStr
  })
  let newRegLect;
  // try{
  //   // console.log(createRegLecture);
  //    newRegLect = await createRegLecture.save();
  //   console.log(createRegLecture);
  // }catch(err){
  //   const error = new HttpError(
  //     'creating reg lec failed,please try again',
  //     500
  //   );
  //   return next(error);
  // }
  createRegLecture.save()
  .then(function( data) {
    console.log(data);
    
})
.catch(function(error){
 console.log(error);
});
  res.status(201).json({regLec:createRegLecture.toObject({getters:true})});
};

const postAttendanceByExtraLec = async (req,res,next) => {
  // const errors= validationResult(req);
  // if(!errors.isEmpty()){
  //   return next(
  //     new HttpError('Invalid inputs passed , please check your data ',422)
  //   );
  // }
  const {extraLec} = req.body;

  const  d = new Date();
 
  const  date = d.getDate();
  const  month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  const  year = d.getFullYear();
 
  const  dateStr = date  + "-" + month + "-"  + year;

  const createExtraLecture = new extraLecSchema({
    extraLec: extraLec,
    date : dateStr
  })

  try{
    await createExtraLecture.save();
  }catch(err){
    const error = new HttpError(
      'creating extra lec failed,please try again',
      500
    );
    return next(error);
  }
  
  res.status(201).json({extraLec:createExtraLecture.toObject({getters:true})});
};

const getAttendanceByViewStudents = async (req,res,next) => {
  const dateId = req.params.dateId;

  let regLecAttendance;
  try{
    regLecAttendance = await regLecSchema.find(a =>a.date === dateId); 
  }catch(err){
    const error = new HttpError(
      'getting attendance failed,please try again',
      500
    );
    return next(error);
  }

  let currentAttendance;
  try{
    currentAttendance = await viewStudentsSchema.find(a => a.date === dateId);
  }catch(err){
    const error = new HttpError(
      'getting attendance failed,please try again',
      500
    );
    return next(error);
  }

  const { presentDaysArrayRegLec} = regLecAttendance.present;
  let presentDays = currentAttendance.presentDays;
  let absentDays = currentAttendance.absentDays;

  presentDaysArrayRegLec .map( p => {
    if(p.value === true){
      presentDays +=1;
    }else{
      absentDays +=1;
    }
  })

  let extraLecAttendance;
  try{
    extraLecAttendance = await extraLecSchema.find(a =>a.date === dateId); 
  }catch(err){
    const error = new HttpError(
      'getting attendance failed,please try again',
      500
    );
    return next(error);
  }

  const {presentDaysArrayExtraLec} = extraLecAttendance.present;

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
    await currentAttendance.save();
  }catch(err){
    const error = new HttpError(
      'fetching attendance failed, please try agian later.',
      500
    );
    return next(error);
  }
  res.status(200).json({attendance:currentAttendance});
    
}

// const getTimeTable = (req,res,next)=>{

// };

exports.postAttendanceByRegLec = postAttendanceByRegLec;
exports.postAttendanceByExtraLec = postAttendanceByExtraLec;
exports.getAttendanceByViewStudents =getAttendanceByViewStudents;