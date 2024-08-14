const Product = require("../model/product.model");

exports.addNewProduct = async (req, res) => {
    try {
        console.log(req.body);
        const product = await Product.create({...req.body});
        product.save();
        res.status(201).json({product,message:"Product Added"});
    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};
