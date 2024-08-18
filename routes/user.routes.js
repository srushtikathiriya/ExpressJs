const express = require('express');
const userRoutes = express.Router();
const {
    addNewUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser
} = require("../controller/user.controller");


//  add new product - create
userRoutes.post("/add-user",addNewUser);
userRoutes.get("/",getAllUser);
userRoutes.get("/get-user",getUser);
userRoutes.put("/",updateUser);
userRoutes.delete("/",deleteUser)

module.exports = userRoutes;