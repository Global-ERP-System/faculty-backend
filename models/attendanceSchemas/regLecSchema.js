const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const regLecSchema = new Schema({
    regLec:{
        rollNos:[{type:Boolean}],
        present:[{type:Boolean}],
        absent:[{type:Boolean}]
    },
    date:{type:String}
    
});


module.exports = mongoose.model('RegLec',regLecSchema);