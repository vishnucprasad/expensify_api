const express = require("express");
const router = express.Router();
const subscriptionsController = require("../controllers/subscription");
const authenticateUser = require("../middlewares/authenticateUser");

// Authentication Middleware
router.use(authenticateUser);

// Private Routes
router.post('/', subscriptionsController.addSubscription);

module.exports = router;