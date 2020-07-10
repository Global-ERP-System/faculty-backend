const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const examMarksSchema = new Schema({
    //classId:{type:String},
    //subjectId:{type:String},
    rollNos:[{type:String,required:true,unique:true}],
    midTerms:[{type:Number,required:true}],
    continousEvaluation:[{type:Number,required:true}],
    finals:[{type:Number,required:true}]
})


module.exports = new mongoose.model('ExamMark', examMarksSchema);