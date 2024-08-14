const express = require('express');
const productRoutes = express.Router();
const {
    addNewProduct,
    getAllProduct,
    getProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
} = require("../controller/product.controller");


//  add new product - create
productRoutes.post("/",addNewProduct);

// Get all products - read
productRoutes.get("/",getAllProduct);

// Get Single product - Read
productRoutes.get("/:id",getProduct);

// Replace Data - PUT
productRoutes.put("/:id",replaceProduct);

// Update Data - PATCH
productRoutes.patch("/:id",updateProduct);

// Delete Data - DELETE

productRoutes.delete("/:id",deleteProduct);

module.exports = productRoutes;