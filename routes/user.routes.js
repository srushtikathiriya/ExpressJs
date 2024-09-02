const express = require('express');
const userRoutes = express.Router();
const {
    registerUser,
    loginUser,
    userProfile,
    updateProfile,
    changePassword,
    deleteUser,
    specialUser
} = require("../controller/user.controller");
const {verifyToken} = require("../helpers/tokenVerify");
// const {upload} = require("../helpers/imageUpload");

userRoutes.post("/register",registerUser);
userRoutes.post("/login",loginUser);
userRoutes.get("/me",verifyToken,userProfile);
userRoutes.put("/update-profile",verifyToken,updateProfile);
userRoutes.put("/change-password", verifyToken, changePassword);
userRoutes.delete('/delete-user',verifyToken, deleteUser);
userRoutes.get('/specialuser',specialUser);

module.exports = userRoutes;