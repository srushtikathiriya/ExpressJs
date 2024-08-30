const express = require('express');
const profileRoutes = express.Router();
const {
    showProfilePage,
    profilePage,
    editprofile,
    updateProfile,
    deleteProfile ,
    // doneProfile
} = require("../controller/profile.controller");


profileRoutes.get("/", showProfilePage);
profileRoutes.post("/", profilePage);
profileRoutes.get("/:id/edit", editprofile);
profileRoutes.post("/:id/edit", updateProfile);
profileRoutes.post("/:id", deleteProfile);
// profileRoutes.post("/:id/mark-done", doneProfile);


module.exports = profileRoutes;