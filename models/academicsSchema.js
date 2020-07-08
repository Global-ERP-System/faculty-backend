const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = moongoose.Schema;

const academicsSchema = new Schema({
  // timeTable : {type:String},
  //rollnos will be attatched to principal database
  date:{type:String,
    
    reglec:{
    rollNos:[{type:String,unique:true}],
    present:[{type:Boolean,required:true}],
    absent:[{type:Boolean,required:true}],
    
  },
  extralec:{
    rollNos:[{type:String,unique:true}],
    present:[{type:Boolean,required:true}],
    absent:[{type:Boolean,required:true}]
  },
  viewStudents:{
    rollNos:[{type:String,unique:true}],
    presentDays:[{type:Number,required:true}],
    absentDays:[{type:Number,required:true}],
    attendance:[{type:Number,required:true}]
  }}  
  
})


academicsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Academic',academicsSchema);
