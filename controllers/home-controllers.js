const HttpError = require('../models/http-error');

const internshipSchema = require('../models/homeSchemas/internshipSchema'),
    applicationSchema = require('../models/homeSchemas/raisereqSchema/applicationSchema'),
    reportSchema = require('../models/homeSchemas/raisereqSchema/reportSchema'),
    documentSchema = require('../models/homeSchemas/raisereqSchema/documentSchema'),
    salarySchema = require('../models/homeSchemas/salarySchema'),
    feedbackSchema = require('../models/homeSchemas/feedbackSchema');

const getInternshipDetails = async (req,res,next) => {
  const classId = req.params.classId;

  try{
    const getInternship = await internshipSchema.findById(classId);
  }catch(err){
    const error= new HttpError(
      'getting details  failed,please try again',500
    );
    return next(error);
  }
  
  res.status(200).json({internship : getInternship});

};

const postApplication = async (req,res,next)=>{
  const application = req.body;
  
  const createApplication = new applicationSchema({
    fromDate : application.fromDate,
    toDate : application.toDate,
    reason : application.reason
  });
  createApplication.save()
    .then((data)=>{
      res.status(201).json({application:createApplication.toObject({getters:true})});
    })
    .catch((error)=>{
      console.log(error);
    });

}

 const postReport = async (req,res,next)=>{
   const report = req.body;
   const createReport = new reportSchema({
     report : report.report
   });
   createReport.save()
   .then((data)=>{
    res.status(201).json({report:createReport.toObject({getters:true})});
   })
   .catch((error)=>{
     console.log(error);
   })

 }

const postDocument = async (req,res,next)=>{
  const document = req.body;
  const createDocument = new documentSchema({
    document : document.document
  });
  createDocument.save()
  .then((data)=>{
    res.status(201).json({document : createDocument.toObject({getters:true})});
  })
  .catch((error)=>{
    console.log(error);
  });
}
// const getSalaryDetails = async (req,res,next)=>{
//   const salid = req.params.salid;
  
//   try{
//     const getSalary = await salarySchema.findById(salid);
//   }catch(err){
//     const error= new HttpError(
//       'getting details  failed,please try again',500
//     );
//     return next(error);
//   }
  
//   res.status(200).json({salary : getSalary.toObject({getters:true})});
// }

const getFeedback = async (req,res,next) => {
  const feedId = req.params.feedId;

  try{
    const getFeedback = await findById(feedId);
  }catch(err){
    const error= new HttpError(
      'fetching feedbacks  failed,please try again',500
    );
    return next(error);
  }

  res.status(200).json({feedback:getFeedback.toObject({getters:true})})
}

exports.getFeedback = getFeedback;
exports.getInternshipDetails = getInternshipDetails;
exports.postApplication = postApplication;
exports.postReport = postReport;
exports.postDocument = postDocument;
// exports.getSalaryDetails = getSalaryDetails;