const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = moongoose.Schema;

const profileSchema = new Schema({

  image:{type:String,required:true},
  fullName:{type:String,required:true},
  address:{type:String,required:true},
  registrationNumber:{type:Number,required:true},
  phoneNumber:{type:Number,required:true,unique:true},
  bloodGroup:{type:String,required:true},
  campusCode:{type:Number,required:true,unique:true},
  emailId:{type:String,required:true,unique:true},
  college:{type:String,required:true},
  experience:{type:String,required:true},
  duration:{type:Number,required:true}

})

profileSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Profile',profileSchema);