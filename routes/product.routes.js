const express = require('express');
const productRoutes = express.Router();
const {
    addNewProduct,
    getAllProduct,
    getProduct
} = require("../controller/product.controller");

//  add new product - create
productRoutes.post("/",addNewProduct);
productRoutes.get("/",getAllProduct);
productRoutes.get("/get-product",getProduct);

module.exports = productRoutes;