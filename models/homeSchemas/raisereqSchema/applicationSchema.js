const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    fromDate : {type:String, required:true},
    toDate : {type:String, required:true},
    reason : {type:String, required:true}
});

module.exports = mongoose.model('Application', applicationSchema);