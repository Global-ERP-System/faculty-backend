const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  studentNames: [{type:String,required:true}],
  subjects:[{type:String,required:true}],
  rating:[{type:Number,required:true}],
  feedbacks:[{type:String,required:true}] 
});

module.exports = mongoose.model('Feedback',feedbackSchema);