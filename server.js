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

// server.post("/product",(req,res)=>{
//     // console.log(req.body);
//     products.push(req.body);
//     res.json({product:req.body,message:"Product Add successfully"});
// })

server.post("/users",(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json({user:req.body,message:"Users Add successfully"});
})

// Get all products - read

// server.get("/product",(req,res)=>{
//     res.json(products);
// })

server.get("/users",(req,res)=>{
    res.json(users);
})

// Get Single product - Read

// server.get("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let item = products.find((product) => product.id === id);
//     res.json(item);
// })

server.get("/users/:id",(req,res)=>{
    let id = +req.params.id;
    let item = users.find((user) => user.id === id);
    res.json(item);
})

// Replace Data - PUT

// server.put("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let productIndex = products.findIndex((product) => product.id === id);
//     console.log(productIndex);
//     products.splice(productIndex, 1,{...req.body});
//     res.json({message:"Product Replace Success"})
// })

server.put("/users/:id",(req,res)=>{
    let id = +req.params.id;
    let userIndex = users.findIndex((user) => user.id === id);
    // console.log(userIndex);
    users.splice(userIndex, 1,{...req.body});
    res.json({message:"User Replace Success"})
})

// Update Data - PATCH
// server.patch("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let productIndex = products.findIndex((product) => product.id === id);
//     // console.log(productIndex);
//     const product = products[productIndex];
//     products.splice(productIndex, 1,{...product,...req.body});
//     res.json({message:"Product Update Success"})
// })

server.patch("/users/:id",(req,res)=>{
    let id = +req.params.id;
    let userIndex = users.findIndex((user) => user.id === id);
    // console.log(productIndex);
    const user = users[userIndex];
    users.splice(userIndex, 1,{...user,...req.body});
    res.json({message:"user Update Success"})
})

// Delete Data - DELETE

// server.delete("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let productIndex = products.findIndex((product) => product.id === id);
//     const product = products[productIndex];
//     products.splice(productIndex, 1);
//     res.json({product,message:"Product Delete Success"})
// })

server.delete("/users/:id",(req,res)=>{
    let id = +req.params.id;
    let userIndex = users.findIndex((user) => user.id === id);
    const user = users[userIndex];
    users.splice(userIndex, 1);
    res.json({user,message:"Product Delete Success"})
})

server.listen(3500,()=>{
    console.log("server start");
})