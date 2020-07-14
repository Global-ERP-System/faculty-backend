const mongoose = require('mongoose');



const appreciationsSchema = new mongoose.Schema({
  rollNo:{type:String,required:true},
  appreciationMessage:{type:String,required:true},
  badge:{type:Boolean,required:true,default:false}
});

module.exports = mongoose.model('Appreciation',appreciationsSchema);