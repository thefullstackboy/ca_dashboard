const mongoose = require('mongoose');


const RegisterSchema = new mongoose.Schema({
    email :{
      type:String,
      require: true
    },   
    password: {
        type:String,
        required: true,       
    },    
    token: { type: String },
    OTP: {
      type: Number
    },
    otpverify:{
      type: Number
    }
    
})

const Register = mongoose.model('register',RegisterSchema);
module.exports = Register;

 
