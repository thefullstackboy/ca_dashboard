const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedServices = require('./seedServices');
var cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/cadashboard', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

    const Service = require('./models/service');    

    app.get("/list", async (req, res,next) => {
        try {
            const products = await Service.find();
            res.json(products);
          } catch (error) {
            res.json({ message: error });
          }
          next()
    }) 
 
    app.patch("/:productId",async (req, res,next) => {
        try {
            const product = {              
              price: req.body.price,             
            };
        
            const updatedPrice = await Service.findByIdAndUpdate(
              { _id: req.params.productId },
              product
            );
            res.json(updatedPrice);
            res.send(updatedPrice);
         
          } catch (error) {
            res.json({ message: error });
          }
          next()
    })        


app.listen(3000,()=>{
     console.log("App IS LISTENING ON PORT 3000!")
})    