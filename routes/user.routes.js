const express = require('express');
const userRoutes = express.Router();
const {
    addNewUser
} = require("../controller/user.controller");


//  add new product - create
userRoutes.post("/",addNewUser);

module.exports = userRoutes;