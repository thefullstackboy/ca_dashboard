const express = require('express');
const app = express();
const mongoose = require('mongoose');
let cors = require('cors');
app.use(cors());
const seedServices = require('./seedServices')
// Import routes
const serviceRoutes = require("./routes/service");

const Service = require('./models/service');

Service.insertMany(seedServices).then(result => {
  console.log(result)
})

mongoose.connect('mongodb://127.0.0.1:27017/cadashboard', {
   useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


  // Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/services", serviceRoutes);    
    
app.listen(3001,()=>{
     console.log("App IS LISTENING ON PORT 3001!")
})    