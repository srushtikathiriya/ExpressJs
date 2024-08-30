const Cart = require('../model/cart.model');

exports.addtoCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user._id, productId: req.body.productId, isDeleted: false });
        if (cart) {
            let IncreaseQuantity = cart.quantity + 1
            await Cart.findByIdAndUpdate(cart._id, { $set: { quantity: IncreaseQuantity } }, { new: true })
            res.status(200).json({ message: 'product Added To Cart susses', IncreaseBy: IncreaseQuantity });
        } else {
            cart = await Cart.create({ ...req.body, userId: req.user._id });;
            res.status(201).json({ message: 'Product Added To cart SussesFully....', cart });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getAllCarts = async (req, res) => {
    try {
        let cart = await Cart.find({ user: req.user._id, isDelete: false });
        res.json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }

}

exports.updateCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({
            userId: req.user._id,
            productId: req.body.productId,
            isDeleted: false
        });
        if (!cart) {
            return res.status(404).json({ message: "cart Not Found Can't update..." });
        }
        cart = await Cart.findByIdAndUpdate(cart._id, { $set: { quantity: req.body.quantity } }, { new: true });
        res.status(200).json({ message: 'cart Update SussesFully...', updated: req.body.quantity });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteToCart = async (req,res) => {
    try {
      let cart = await Cart.findOne({_id: req.body._id , isDelete : false});
      cart = await Cart.findByIdAndUpdate(cart._id,{$set : {isDelete : true }} , {new : true});
      res.status(200).json({message : 'Product Was Deleted....',cart});
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
}