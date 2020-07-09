const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const viewStudentsSchema = new Schema({
    rollNos:[{type:String,unique:true,required:true}],
    presentDays:[{type:Number,required:true}],
    absentDays:[{type:Number,required:true}],
    attendance:[{type:Number,required:true}],
    date:{type:String}
});

module.exports = mongoose.model('ViewStudent',viewStudentsSchema);