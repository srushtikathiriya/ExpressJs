const express = require('express');
const server = express();
const morgan = require('morgan');
const products = require("./product.json");
const users = require("./user.json");

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan("dev"));

server.get("/",(req,res)=>{
    res.send("Welcome to the Product API");
})

// crud

// add new product - create

server.post("/product",(req,res)=>{
    // console.log(req.body);
    products.push(req.body);
    res.json({product:req.body,message:"Product Add successfully"});
})

server.post("/users",(req,res)=>{
    // console.log(req.body);
    users.push(req.body);
    res.json({user:req.body,message:"Users Add successfully"});
})

// Get all products - read

server.get("/product",(req,res)=>{
    res.json(products);
})

server.get("/users",(req,res)=>{
    res.json(users);
})

// Get Single product - Read

server.get("/product/:id",(req,res)=>{
    let id = +req.params.id;
    let item = products.find((product) => product.id === id);
    res.json(item);
})

server.get("/users/:id",(req,res)=>{
    let id = +req.params.id;
    let item = users.find((user) => user.id === id);
    res.json(item);
})

server.listen(3500,()=>{
    console.log("server start");
})