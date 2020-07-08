const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = moongoose.Schema;

const academicsSchema = new Schema({
  // timeTable : {type:String},
  //rollnos will be attatched to principal database
    reglec:{
<<<<<<< HEAD
      rollnos:[{type:String,unique:true}],
=======
      rollNos:[{type:String,unique:true}],
>>>>>>> a88460bb345e3e2bc10d4441695da0ba0e7ecbab
      present:[{type:Boolean,required:true}],
      absent:[{type:Boolean,required:true}]
    },
    extralec:{
<<<<<<< HEAD
      rollnos:[{type:String,unique:true}],
=======
      rollNos:[{type:String,unique:true}],
>>>>>>> a88460bb345e3e2bc10d4441695da0ba0e7ecbab
      present:[{type:Boolean,required:true}],
      absent:[{type:Boolean,required:true}]
    },
    viewStudents:{
      rollNos:[{type:String,unique:true}],
      present:[{type:Boolean,required:true}],
      absent:[{type:Boolean,required:true}]
    }
})


academicsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Academic',academicsSchema);
