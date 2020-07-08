const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = moongoose.Schema;

const academicsSchema = new Schema({
  // timeTable : {type:String},
  //rollnos will be attatched to principal database
    reglec:{
      rollNos:[{type:Number,unique:true}],
      present:[{type:Boolean,required:true}],
      absent:[{type:Boolean,required:true}]
    },
    extralec:{
      rollNos:[{type:Number,unique:true}],
      present:[{type:Boolean,required:true}],
      absent:[{type:Boolean,required:true}]
    },
    viewStudents:{
      rollNos:[{type:Number,unique:true}],
      present:[{type:Boolean,required:true}],
      absent:[{type:Boolean,required:true}]
    }
})


academicsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Academic',academicsSchema);
