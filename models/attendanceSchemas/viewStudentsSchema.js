const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const viewStudentsSchema = new Schema({
    rollNos:[{type:String,unique:true}],
    presentDays:[{type:Number}],
    absentDays:[{type:Number}],
    attendance:[{type:Number}],
    date:{type:String}
});


module.exports = mongoose.model('ViewStudent',viewStudentsSchema);