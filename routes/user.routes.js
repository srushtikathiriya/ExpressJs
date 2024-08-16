const express = require('express');
const userRoutes = express.Router();
const {
    addNewUser,
    getAllUser,
    getUser
} = require("../controller/user.controller");


//  add new product - create
userRoutes.post("/",addNewUser);
userRoutes.get("/",getAllUser);
userRoutes.get("/get-user",getUser);

module.exports = userRoutes;