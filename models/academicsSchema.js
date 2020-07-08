const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = moongoose.Schema;

const academicsSchema = new Schema({
  // timeTable : {type:String},
  
    reglec:{
      rollnos:[{type:Number,unique:true}],
      present:[{type:Boolean,required:true}],
      absent:[{type:Boolean,required:true}]
    },
    extralec:{
      rollnos:[{type:Number,unique:true}],
      present:[{type:Boolean,required:true}],
      absent:[{type:Boolean,required:true}]
    },
    viewStudents:{
      rollnos:[{type:Number,unique:true}],
      present:[{type:Boolean,required:true}],
      absent:[{type:Boolean,required:true}]
    }
})


academicsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Academic',academicsSchema);
