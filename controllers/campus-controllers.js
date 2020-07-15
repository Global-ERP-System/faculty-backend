const HttpError = require('../models/http-error'),
    assignmentSchema = require("../models/campusSchemas/assignmentSchema");


const postAssignment = async (req,res,next)=>{
    const assignment = req.body;
    const createAssignment = new assignmentSchema({
        class : assignment.class,
    subject : assignment.subject,
    for : assignment.for,
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




exports.postAssignment = postAssignment;
