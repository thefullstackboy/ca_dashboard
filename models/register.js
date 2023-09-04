const mongoose = require('mongoose');


const RegisterSchema = new mongoose.Schema({
    email :{
      type:String,
      require: true
    },   
    password: {
        type:String,
        required: true,       
    }        
})

const Register = mongoose.model('register',RegisterSchema);
module.exports = Register;

 
