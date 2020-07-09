const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regLecSchema = new Schema({
    regLec:{
        rollNos:[{type:String,required:true,unique:true}],
        present:[{type:Boolean,required:true}],
        absent:[{type:Boolean,required:true}]
    },
    date:{type:String}
    
});

module.exports = mongoose.model('RegLec',regLecSchema);