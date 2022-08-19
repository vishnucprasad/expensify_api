const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");
const authenticateUser = require("../middlewares/authenticateUser");

// Authentication Middleware
router.use(authenticateUser);

// Private Routes
router.post('/add', categoryController.addCategory);

module.exports = router;