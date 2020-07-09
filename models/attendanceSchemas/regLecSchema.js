const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const regLecSchema = new Schema({
    regLec:{
        rollNos:[{type:String,required:true}],
        present:[{type:String,required:true}],
        absent:[{type:String,required:true}]
    },
    date:{type:String}
    
});

regLecSchema.plugin(uniqueValidator)
module.exports = mongoose.model('RegLec',regLecSchema);