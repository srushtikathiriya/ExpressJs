const Product = require("../model/product.model");

// Add New User
exports.addNewProduct = async (req, res) => {
    try {
        // console.log(req.body);
        const {category,price,brand,image} = req.body;
        let product = await Product.findOne({brand:brand});
        if(product)
            return res.status(400).json({message:"Product already exists"});
        product = await Product.create({
            category,price,brand,image
        });
        product.save();
        res.status(201).json({product,message:"Product Added"});
    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Get All Users
exports.getAllProduct = async(req,res) =>{
    try {
        let products = await Product.find();
        res.status(200).json(products);
    } 
    catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

// Get User by ID
exports.getProduct = async(req,res)=>{
    try{
        // let user = await User.findOne({_id:req.query.userId});
        let product = await Product.findById(req.query.productId);
        if(!product)
            return res.status(404).json({message:"Product not found"});
        res.status(200).json(product);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
};
