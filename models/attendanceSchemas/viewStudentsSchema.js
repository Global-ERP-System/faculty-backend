const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const viewStudentsSchema = new Schema({
    rollNos:[{type:String,unique:true,required:true}],
    presentDays:[{type:Number,required:true}],
    absentDays:[{type:Number,required:true}],
    attendance:[{type:Number,required:true}],
    date:{type:String}
});

viewStudentsSchema.plugin(uniqueValidator)
module.exports = mongoose.model('ViewStudent',viewStudentsSchema);