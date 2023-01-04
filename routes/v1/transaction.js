const express = require("express");
const router = express.Router();
const transactionController = require("../../controllers/transaction");
const authenticateUser = require("../../middlewares/authenticateUser");

// Authentication Middleware
router.use(authenticateUser);

// Private Routes
router.post('/', transactionController.addTransaction);
router.patch('/:id', transactionController.editTransaction);
router.delete('/:id', transactionController.deleteTransaction);
router.get('/', transactionController.getAllTransactions);

module.exports = router;