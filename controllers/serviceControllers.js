const Service = require('../models/service');
const Leads = require('../models/leads');
const Sales =  require('../models/leads');
const Register = require('../models/register');
let bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  }
module.exports = {
    serviceList,
    price_update,
    leadsList,
    salesList,
    registerForm,
    loginForm    
  }