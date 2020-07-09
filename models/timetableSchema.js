const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    subject : [{ type : String,required : true}][{type : String,required : true}],
    date : {type: String}
})


module.exports = new mongoose.model('Timetable', timetableSchema);