const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    class : {type:String,required:true},
    subject : {type:String,required:true},
    forData : {type:String},
    topic : {type:String,required:true},
    marks : {type:Number,required:true},
    description : {type:String},
    dueDate : {type:String,required:true},
    dueTime : {type:String,required:true}
    // require file

});

module.exports = mongoose.model('Assignment',assignmentSchema);