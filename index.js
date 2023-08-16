const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedServices = require('./seedServices');

mongoose.connect('mongodb://127.0.0.1:27017/cadashboard', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

    const Service = require('./models/service');  

    
    Service.insertMany(seedServices)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })  


app.listen(3000,()=>{
     console.log("App IS LISTENING ON PORT 3000!")
})    