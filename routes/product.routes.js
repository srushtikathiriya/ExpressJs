const express = require('express');
const productRoutes = express.Router();
const {
    addNewProduct
} = require("../controller/product.controller");


//  add new product - create
productRoutes.post("/",addNewProduct);

module.exports = productRoutes;