const HttpError = require('../models/http-error'),
    assignmentSchema = require("../models/campusSchemas/assignmentSchema");


const postAssignment = async (req,res,next)=>{
    const assignment = req.body;
    const createAssignment = new assignmentSchema({
        class : assignment.class,
        subject : assignment.subject,
        forData : assignment.forData,
        topic :assignment.topic,
        marks : assignment.marks,
        description : assignment.description,
        dueDate : assignment.dueDate,
        dueTime : assignment.dueTime
    });
    createAssignment.save()
    .then((data)=>{
     res.status(201).json({assignment:createAssignment.toObject({getters:true})});
    })
    .catch((error)=>{
      console.log(error);
    });
}

const updateAssignment = async(req,res,next) => {
    const asmId = req.params.asmId;

    const {forData,topic,marks,description,dueDate,dueTime} = req.body;
    
    let assignment;
    try{
        assignment =await assignmentSchema.findById(asmId); 
    }catch(err){
        const error = new HttpError(
          'fetching assignment failed,please try again',
          500
        );
        return next(error);
    }

    assignment.forData = forData;
    assignment.topic = topic;
    assignment.marks = marks;
    assignment.description = description;
    assignment.dueDate = dueDate;
    assignment.dueTime = dueTime;

    try{
        await assignment.save();
    }catch(err){
        const error = new HttpError(
          'updating assignment failed,please try again',
          500
        );
        return next(error);
    }

    res.status(200).json({assignment : assignment.toObject({getters:true})})

}

const deleteAssignment = async(req,res,next) => {
    const asmId = req.params.asmId;

    let assignment;
    try{
        assignment = await assignmentSchema.findById(asmId);
    }catch(err){
        const error = new HttpError(
          'fetching assignment failed,please try again',
          500
        );
        return next(error);
    }

    try{
        await assignment.remove();
    }catch(err){
        const error = new HttpError(
          'deleting assignment failed,please try again',
          500
        );
        return next(error);
    }

    res.status(200).json({message:"deleted assignment successfully"});

}


exports.deleteAssignment = deleteAssignment;
exports.updateAssignment = updateAssignment;
exports.postAssignment = postAssignment;
