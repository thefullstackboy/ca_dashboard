const Service = require('../models/service');
const Leads = require('../models/leads');
const Sales =  require('../models/leads');
const Register = require('../models/register');
let bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

// Get list
const serviceList = async(req,res,next)=> {
    try {
        const products = await Service.find();
        res.json(products);
      } catch (error) {
        res.json({ message: error });
      }
      next()
}

const leadsList = async(req,res,next)=> {
  try {
      const products = await Leads.find();
      res.json(products);
    } catch (error) {
      res.json({ message: error });
    }
    next()
}

const salesList = async(req,res,next)=> {
  try {
      const products = await Sales.find();
      res.json(products);
    } catch (error) {
      res.json({ message: error });
    }
    next()
}

// Update price
const price_update = async (req, res, next) => {
    try {
        const product = {      
          price: req.body.price,      
        };
    
        const updatedProduct = await Service.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

const registerForm = async(req, res, next) => {
try {
  

const email = req.body.email;
let password = req.body.password;

const oldUser = await Register.findOne({ email });
  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }

password = await bcrypt.hash(password, 10);

  const data = new Register({
    email: email,
    password: password
})



  const dataToSave = await data.save();
  res.status(200).json(dataToSave)
}
  catch (error) {
      res.status(400).json({message: error.message})    
  }
}

const loginForm = async(req, res, next) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;
   
     const user = await Register.findOne({ email });
     

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
     
    }

    else {
      res.status(404).send({message:"login id or password not match"});
    }

  } catch (err) {
    res.status(400).send("Invalid Credentials");
    console.log(err);
  }
  }

  const forgotPassword = async(req, res, next) => {
// email config

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth:{
      user: "deepaksewani03@gmail.com",
      pass: "dlkndekwqtxipiel"
  }
}) 

    console.log(req.body)

    const {email} = req.body;

    if(!email){
        res.status(401).json({status:401,message:"Enter Your Email"})
    }

    try {
        const userfind = await Register.findOne({email:email});

        // token generate for reset password
        const token = jwt.sign({_id:userfind._id},process.env.TOKEN_KEY,{
            expiresIn:"1d"
        });
        
        const setusertoken = await Register.findByIdAndUpdate({_id:userfind._id},{OTP : Math.floor(100000 + Math.random() * 900000)},{new:true});

   console.log("set$$",setusertoken.OTP)
        if(setusertoken){
            const mailOptions = {
                from:process.env.EMAIL,
                to:email,
                subject:"Sending Email For password Reset",
                text:`This is your OTP  ${setusertoken.OTP}`
            }

            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error",error);
                    res.status(401).json({status:401,message:"email not send"})
                }else{
                    console.log("Email sent",info.response);
                    res.status(201).json({status:201,message:"Email sent Succsfully"})
                }
            })
        }

    } catch (error) {
        res.status(401).json({status:401,message:"invalid user"})
    } 
  }

  const verifyToken = async(req, res, next)=>{
    const otpverify = req.body.otpverify;

    try {
        const validuser = await Register.findOne({OTP:otpverify});      
        if(validuser){
            res.status(201).json({status:201,message:"otp verify"})
        }else{
            res.status(401).json({status:401,message:"user not exist"})
        }

    } catch (error) {
        res.status(401).json({status:401,error})
    }
  }


  const restPassword = async(req, res, next)=> {
    try {
    let password = req.body.password;
    console.log("password",password);
    const options = { new: true };  
    const id = req.params.id;
    password = await bcrypt.hash(password, 10);
  

    const result = await Register.findByIdAndUpdate(
         id, password, options
    )
    console.log("tretertertertert",result)

    res.send({message:"change password su"})
    
    

    }
      catch (error) {
          res.status(400).json({message: error.message})    
      }
  }
module.exports = {
    serviceList,
    price_update,
    leadsList,
    salesList,
    registerForm,
    loginForm,
    forgotPassword,
    verifyToken,
    restPassword   
  }