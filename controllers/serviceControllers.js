const Service = require('../models/service');   

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

// Update price
const price_update = async (req, res) => {
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

module.exports = {
    serviceList,
    price_update
  }