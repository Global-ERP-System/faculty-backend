const HttpError = require('../models/http-error');

const internshipSchema = require('../models/homeSchemas/internshipSchema'),
    applicationSchema = require('../models/homeSchemas/raisereqSchema/applicationSchema'),
    reportSchema = require('../models/homeSchemas/raisereqSchema/reportSchema');

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

exports.getInternshipDetails = getInternshipDetails;
exports.postApplication = postApplication;
exports.postReport = postReport;