const express = require('express');
const server = express();

// const data = require('./friend.json');
// const fs = require('fs');
// const data = fs.readFileSync("./friend.json","utf-8");
// console.log(data);

const morgan = require('morgan');

// Third-party middleware:-
// 4.0 version -> body - parser

// Built-in middleware:-
// express.json()->raw/json formate data
// express.urlencode()->form data
// express.static()->static data

// server.use(express.json());
// server.use(express.urlencoded({extended: true}));
server.use("/hello",express.static("public"))
server.use(morgan("dev"))

let middleware =(req,res,next)=>{
    console.log(req.body);
    if(req.body.age >= 18){
        console.log("Success");
        next();
    }
    else{
        return res.json({message:"Inccorect Way!!!"})
    }
}

// let loggerFun = (req, res, next)=>{
//     console.log(req.url,"\t",req.method,"\t" ) ;
//     next();   
// }
// server.use(loggerFun)

// application level:-
// server.use(middleware);


// Router-level middleware:
server.get('/',middleware, (req, res) => {
        res.write("Welcome Express Js");
        res.end();
})


// server.get("/friend",(req,res)=>{
//     res.status(200);
//     res.json(JSON.parse(data));
// })

server.listen(3500,()=>{
    console.log(`Server Start at http://localhost:3500`);   
})


/*
    git checkout -b sk-1
    git add .
    git commit -m "Your commit"
    git push -u origin sk-1
*/