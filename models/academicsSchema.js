const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const academicsSchema = new Schema({
  // timeTable : {type:String},
  //rollnos will be attatched to principal database

    
  reglec:{
    rollNos:[{type:String,unique:true}],
    present:[{type:Boolean,required:true}],
    absent:[{type:Boolean,required:true}],
    date:{type:String}
  },
  extralec:{
    rollNos:[{type:String,unique:true}],
    present:[{type:Boolean,required:true}],
    absent:[{type:Boolean,required:true}],
    date:{type:String}
  },
  viewStudents:{
    rollNos:[{type:String,unique:true}],
    presentDays:[{type:Number,required:true}],
    absentDays:[{type:Number,required:true}],
    attendance:[{type:Number,required:true}],
    date:{type:String}
  } 
  
})


academicsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Academic',academicsSchema);
