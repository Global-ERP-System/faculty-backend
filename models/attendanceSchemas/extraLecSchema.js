const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const extraLecSchema = new Schema({
    rollNos:[{type:String,unique:true,required:true}],
    present:[{type:Boolean,required:true}],
    absent:[{type:Boolean,required:true}],
    date:{type:String}
});

extraLecSchema.plugin(uniqueValidator)
module.exports = mongoose.model('ExtraLec',extraLecSchema);