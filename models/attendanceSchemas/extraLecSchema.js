const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const extraLecSchema = new Schema({
    extraLec:{
        rollNos:[{type:String}],
        present:[{type:String}],
        absent:[{type:String}]
    },
    date:{type:String}
    
});


module.exports = mongoose.model('extraLec',extraLecSchema);