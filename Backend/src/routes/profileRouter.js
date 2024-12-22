const express = require("express");
const profileouter = express.Router();
const { authMiddleware } = require("../middleware/auth.js");
const { validateEditProfile } = require("../utils/validation.js");

profileouter.get("/profile/view", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    if(!user){
      throw new Error("User is not set")
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});
profileouter.patch("/profile/edit", authMiddleware, async (req, res) => {
  try {
    console.log("Logged-in User:", req.user);  
    console.log("Edit User:", req.body);  

    if (!validateEditProfile(req)) {
      throw new Error("Invalid Edit");
    }
    const loggedInUser = req.user;
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    await loggedInUser.save();
    res.json({
      message: "Data Edit succesfully",
      data: loggedInUser,
    });
    console.log({
      message: "Data Edit succesfully",
      data: loggedInUser,
    })
  } catch (error) {
    res.status(400).send("Error:" + error.message);
  }
});
module.exports = profileouter;
