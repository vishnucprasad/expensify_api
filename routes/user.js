const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

// Public Routes
router.post('/register', userController.register);

module.exports = router;