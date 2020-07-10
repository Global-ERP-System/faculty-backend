const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const internshipSchema = new Schema({
   classId :{type:String},
   rollNos : [{type:String}],
   receivedArray: [{type:Boolean}]
    
});

module.exports = mongoose.model('Internship',internshipSchema);