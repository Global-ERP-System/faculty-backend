//const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const regLecSchema = require('../models/academicsSchema/attendanceSchemas/regLecSchema');
const extraLecSchema = require('../models/academicsSchema/attendanceSchemas/extraLecSchema');
const viewStudentsSchema = require('../models/academicsSchema/attendanceSchemas/viewStudentsSchema');
const examMarksSchema = require('../models/academicsSchema/examMarksSchema');

//ATTENDANCE
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


  createExtraLecture.save()
  .then(function( data) {
    console.log(data);
  })
  .catch(function(error){
  console.log(error);
  });
  
  res.status(201).json({extraLec:createExtraLecture.toObject({getters:true})});
};

const getAttendanceByViewStudents = async (req,res,next) => {
  const dateId = req.params.dateId;

  let regLecAttendance;
  try{
    regLecAttendance = await regLecSchema.find({date : dateId});//a.date === dateId); 
  }catch(err){
    const error = new HttpError(
      'getting attendance failed,please try again',
      500
    );
    return next(error);
  }

  let currentAttendance;
  try{
    currentAttendance = await viewStudentsSchema.find({date : dateId});
  }catch(err){
    const error = new HttpError(
      'getting attendance failed,please try again',
      500
    );
    return next(error);
  }
  

  
 

  const presentRegLecValues = regLecAttendance[0].regLec.present;
  

  

  let extraLecAttendance;
  try{
    extraLecAttendance = await extraLecSchema.find({date : dateId}); 
  }catch(err){
    const error = new HttpError(
      'getting attendance failed,please try again',
      500
    );
    return next(error);
  }

  // const {presentDaysArrayExtraLec} = extraLecAttendance.present;

  // extraLecAttendance.map(e=>{
  //   e.extraLec.present.map( p => {
  //       if(p === true){
  //         presentDays+=1;
  //       }else{
  //         absentDays +=1;
  //       }
  //     })
  // })

  // console.log(presentdays);

  const presentExtraLecValues = extraLecAttendance[0].extraLec.present;
  


  for(var i=0;i<presentRegLecValues.length;i++){
    if(presentRegLecValues || presentExtraLecValues){
      currentAttendance.presentDays[i] += presentExtraLecValues[i] + presentRegLecValues[i] ;
    } 
   
  }
console.log(currentAttendance.presentDays);
  

  currentAttendance.presentDays = presentDays;
  currentAttendance.absentDays = absentDays;
  if(presentDays && absentDays){
    currentAttendance.attendance = Math.floor((presentdays)*(100)/(presentdays + absentdays));

  }

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

//STUDENT MARKS

const postExamMarks = async (req,res,next) => {

  const  {rollNos,midTerms,continousEvaluation,finals} = req.body;

  const newExamMarks = new examMarksSchema({
    rollNos:rollNos,
    midTerms:midTerms,
    continousEvaluation:continousEvaluation,
    finals:finals
  })

  newExamMarks.save()
  .then((data) => {console.log(data)})
  .catch((err) => {console.log(err)})

  res.status(200).json({examMarks : newExamMarks.toObject({getters:true})}) 

}

exports.postExamMarks = postExamMarks;
exports.postAttendanceByRegLec = postAttendanceByRegLec;
exports.postAttendanceByExtraLec = postAttendanceByExtraLec;
exports.getAttendanceByViewStudents =getAttendanceByViewStudents;