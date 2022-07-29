const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction");
const authenticateUser = require("../middlewares/authenticateUser");

// Authentication Middleware
router.use(authenticateUser);

// Private Routes
router.post('/add', transactionController.addTransaction);
router.patch('/edit/:transactionId', transactionController.editTransaction);
router.delete('/delete/:transactionId', transactionController.deleteTransaction);

module.exports = router;