const mongoose = require('mongoose');


const reportSchema = new mongoose.Schema({
    report : {
        type : String,
        required : true
    }
});


module.exports = mongoose.model('Report',reportSchema);