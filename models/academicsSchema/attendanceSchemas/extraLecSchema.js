const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const extraLecSchema = new Schema({
    extraLec:{
        rollNos:[{type:String,required:true,unique:true}],
        present:[{type:Boolean,required:true}]
       
    },
    date:{type:String}
    
});

module.exports = mongoose.model('extraLec',extraLecSchema);