const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const regLecSchema = new Schema({
    regLec:{
        rollNos:[{type:String}],
        present:[{type:String}],
        absent:[{type:String}]
    },
    date:{type:String}
    
});


module.exports = mongoose.model('RegLec',regLecSchema);