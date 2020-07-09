const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const extraLecSchema = new Schema({
    extraLec:{
        rollNos:[{type:Boolean}],
        present:[{type:Boolean}],
        absent:[{type:Boolean}]
    },
    date:{type:String}
    
});


module.exports = mongoose.model('extraLec',extraLecSchema);