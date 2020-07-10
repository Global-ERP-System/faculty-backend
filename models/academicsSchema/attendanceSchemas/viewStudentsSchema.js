const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const viewStudentsSchema = new Schema({
    rollNos:[{type:String,unique:true,required:true}],
    presentDaysArray:[{type:Number,required:true,default:0}],
    absentDaysArray:[{type:Number,required:true,default:0}],
    attendanceArray:[{type:Number,required:true,default:0}],
    date:{type:String}
});

module.exports = mongoose.model('ViewStudent',viewStudentsSchema);