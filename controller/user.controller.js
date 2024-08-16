const User = require("../model/product.model");

// Add New User
exports.addNewUser = async (req, res) => {
    try {
        // console.log(req.body);
        const {firstName, lastName,email,hobbies,address,age,image} = req.body;
        let user = await User.findOne({email:email});
        if(user)
            return res.status(400).json({message:"User already exists"});
        user = await User.create({
            firstName, lastName,email,age,hobbies,address,image
        });
        user.save();
        res.status(201).json({user,message:"User Added"});
    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Get All Users
exports.getAllUser = async(req,res) =>{
    try {
        let users = await User.find();
        res.status(200).json(users);
    } 
    catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

// Get User by ID
exports.getUser = async(req,res)=>{
    try{
        // let user = await User.findOne({_id:req.query.userId});
        let user = await User.findById(req.query.userId);
        if(!user)
            return res.status(404).json({message:"User not found"});
        res.status(200).json(user);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
};
