const Order = require("../model/order.model");
const Cart = require("../model/cart.model");

exports.addNewOrder = async (req, res) => {
    try {
        console.log("user: ->>>>", req.user);
        
        let cart = await Cart.find({ user: req.user._id, isDelete: false }).populate("productId");
        console.log("Cart: ------> ",cart);
        let orderItem = cart.map((item) => ({
            productId: item.productId._id,
            quantity: item.quantity,
            price: item.productId.productPrice,
            totalAmount: item.quantity * item.productId.productPrice
        }));
        console.log("Order Items: -----> ",orderItem);
        let amount = orderItem.reduce((total, item) => (total += item.totalAmount), 0);
        // console.log(amount);
        
        let order = await Order.create({
            userId: req.user._id,
            item: orderItem,
            totalPrice: amount
        });
        await Cart.updateMany({ user: req.user._id, isDelete: false }, { isDelete: true });
        res.json({ message: 'order placed...', order });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findOne({ _id: orderId, userId: req.user._id });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        if (order.isDelete) {
            return res.status(400).json({ message: 'Order already cancelled' });
        }

        order.isDelete = true;
        await order.save();

        res.json({ message: 'Order cancelled successfully', order });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};