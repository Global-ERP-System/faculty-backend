const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema  = new Schema({
    username : {type:String, required:true},
    password : {type:String, required:true},
    email : {type:String, required:true},
    profile:{type:mongoose.Types.ObjectId,required:true,ref:'Profile'}
});

// userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);