const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
//const productRoute = require("./routes/product");
///const cartRoute = require("./routes/cart");
//const orderRoute = require("./routes/order");
//const stripeRoute = require("./routes/stripe");
//const cors = require("cors");

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)



const CONNECTION_URL = 'mongodb+srv://backendandfrontend:backendandfrontend@cluster0.lxe9qyt.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server Successfully Running on port: ${PORT}`)))
.catch((error) => console.log(error.massage))







































// mongoose.set('useFindAndModify', false)
///...
    /*
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

   */
   //......
   
   
   
   /*
    //import express from 'express'
    //import bodyParser from 'body-parser'
   // import mongoose from 'mongoose'
  //  import cors from 'cors'
   // const app = express()

    ////////////////////////////////////////////
    const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');
const  bodyParser = require ('body-parser')



dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connection Successfull!'))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

//app.listen(process.env.PORT || 5000, () => {
  //console.log('Backend server is running!');
//});




    //////////////////////////////

    app.use(bodyParser.json({limit:'30mb', extended: true }))
    app.use(bodyParser.urlencoded({limit:'30mb', extended: true }))
    app.use(cors())

    const CONNECTION_URL = 'mongodb+srv://backendandfrontend:backendandfrontend@cluster0.lxe9qyt.mongodb.net/?retryWrites=true&w=majority'

    const PORT = process.env.PORT || 5000

    mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server Successfully Running on port: ${PORT}`)))
    .catch((error) => console.log(error.massage))

   // mongoose.set('useFindAndModify', false)


*/