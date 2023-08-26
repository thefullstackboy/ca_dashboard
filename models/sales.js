const mongoose = require('mongoose');


const SalesSchema = new mongoose.Schema({
    email :{
      type:String,
      require: true
    },   
    service_name: {
        type:String,
        required: true,       
    },
    date: {
        type:Date,
        required: true,       
    },
    status2: {
        type:String,
        required: false,       
    },      
})

const Sales = mongoose.model('Sales',SalesSchema);
module.exports = Sales;

 
