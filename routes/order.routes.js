const express = require('express');

const orderRoutes = express.Router();
const { addNewOrder,cancelOrder } = require('../controller/order.controller');
const { verifyToken } = require('../helpers/tokenVerify');

orderRoutes.post('/',verifyToken,addNewOrder);
orderRoutes.put('/cancel/:orderId', verifyToken, cancelOrder);

module.exports = orderRoutes;