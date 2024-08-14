const express = require('express');
const userRoutes = express.Router();
const {
    addNewUser,
    getAllUser,
    getUser,
    replaceUser,
    updateUser,
    deleteUser
} = require("../controller/user.controller");


//  add new product - create
userRoutes.post("/",addNewUser);

// Get all products - read
userRoutes.get("/",getAllUser);

// Get Single product - Read
userRoutes.get("/:id",getUser);

// Replace Data - PUT
userRoutes.put("/:id",replaceUser);

// Update Data - PATCH
userRoutes.patch("/:id",updateUser);

// Delete Data - DELETE

userRoutes.delete("/:id",deleteUser);

module.exports = userRoutes;