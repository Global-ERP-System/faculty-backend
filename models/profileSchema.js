const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  
  image:{type:String},
  fullName:{type:String,required:true},
  address:{type:String,required:true},
  registrationNumber:{type:String,required:true,unique:true},
  phoneNumber:{type:Number,required:true,unique:true},
  bloodGroup:{type:String,required:true},
  campusCode:{type:String,required:true,unique:true},
  emailId:{type:String,required:true,unique:true},
  college:{type:String,required:true},
  experience:{type:String,required:true},
  duration:{type:String,required:true}
  // creator : {  type : mongoose.Types.ObjectId,required:true, ref : 'User'}
  
});

// profileSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Profile',profileSchema);