const mongoose = require('mongoose'),
passportLocalMongoose = require('passport-local-mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema  = new mongoose.Schema({
    username : {type:String, required:true},
    password : {type:String, required:true},
    email : {type:String, required:true},
    profile:{type:mongoose.Types.ObjectId,required:true,ref:'Profile'}
});
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);