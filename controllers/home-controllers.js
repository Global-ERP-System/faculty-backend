const HttpError = require('../models/http-error');

const internshipSchema = require('../models/homeSchemas/internshipSchema');

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

exports.getInternshipDetails = getInternshipDetails;