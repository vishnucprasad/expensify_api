const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const authenticateUser = require("../middlewares/authenticateUser");

// Public Routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Authentication Middleware
router.use(authenticateUser);

// Private Routes
router.get('/auth', userController.getAuth);
router.post('/logout', userController.logout);

module.exports = router;