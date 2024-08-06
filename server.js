const express = require('express');
const server = express();

server.get('/', (req, res) => {
        res.write("Welcome Express Js");
        res.end();
})

server.get('/login', (req, res) => {
    res.write("Welcome Express Js");
    res.end();
})

server.get('/login', (req, res) => {
    res.json({msg:"Login page post"});
    res.end();
})

server.listen(3500,()=>{
    console.log(`Server Start at http://localhost:3500`);
    
})