const mongoose = require('mongoose');
const salarySchema = new mongoose.Schema({
       salary : [
           [
               sNo : {type : Number}
           ]
       ] 
});