const express = require("express");
const router = express.Router();
const subscriptionsController = require("../controllers/subscription");
const authenticateUser = require("../middlewares/authenticateUser");

// Authentication Middleware
router.use(authenticateUser);

// Private Routes
router.post('/', subscriptionsController.addSubscription);
router.patch('/:id', subscriptionsController.editSubscription);
router.delete('/:id', subscriptionsController.deleteSubscription);
router.get('/', subscriptionsController.getAllSubscriptions);

module.exports = router;