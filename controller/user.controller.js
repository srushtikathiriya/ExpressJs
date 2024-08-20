const User = require("../model/user.model");
const bcrypt = require("bcrypt")

// Registration
exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({email:req.body.email,isDelete:false});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        let hashPassword = await bcrypt.hash(req.body.password,10);
        // console.log(hashPassword);
        
        user = await User.create({...req.body,password:hashPassword});
        user.save();
        res.status(201).json({user,message:"User Registration successful"});
    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Login
exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({email:req.body.email,isDelete:false});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        let matchPassword = await bcrypt.compare(req.body.password,user.password);
        // console.log(matchPassword);  
        if(!matchPassword){
            return res.status(400).json({message:"Email or Password not match"})
        }
        res.status(201).json({user,message:"User Login successful"});
    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};