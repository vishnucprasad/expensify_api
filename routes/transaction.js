const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction");
const authenticateUser = require("../middlewares/authenticateUser");

// Authentication Middleware
router.use(authenticateUser);

// Private Routes
router.post('/add', transactionController.addTransaction);
router.post('/edit/:transactionId', transactionController.editTransaction);

module.exports = router;