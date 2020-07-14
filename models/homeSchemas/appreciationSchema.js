const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appreciationsSchema = new Schema({
  rollNo:{tpye:String,required:true},
  appreciationMessage:{type:String,required:true},
  badge:{type:Boolean,required:true,default:false}
});

module.exports = mongoose.model('Appreciation',appreciationsSchema);