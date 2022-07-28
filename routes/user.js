const express = require("express");
const passport = require("passport");
const router = express.Router();
const userController = require("../controller/user");

// Public Routes
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;