const express = require('express');
const server = express();
const morgan = require('morgan');
const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan("dev"));

server.get("/",(req,res)=>{
    res.send("Welcome to the Product API");
})

server.use("/api/product",productRoutes);
server.use("/api/users",userRoutes);

server.listen(3500,()=>{
    console.log("server start");
})