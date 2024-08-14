const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

// Database connection
mongoose
    .connect("mongodb://127.0.0.1:27017/user")
    .then(()=>console.log(`Database connection established successfully...`))
    .catch(err=>console.log(err))

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan("dev"));

server.get("/",(req,res)=>{
    res.send("Welcome to the Express server");
});

const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");

server.use("/api/product",productRoutes);
server.use("/api/users",userRoutes);

server.listen(3500,()=>{
    console.log("server start http://localhost:3500");
})