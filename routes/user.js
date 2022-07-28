const express = require("express");
const passport = require("passport");
const router = express.Router();
const userController = require("../controller/user");

// Public Routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Authentication Middleware
router.use(passport.authenticate('jwt', { session: false }));

// Private Routes
router.get('/auth', userController.getAuth);

module.exports = router;