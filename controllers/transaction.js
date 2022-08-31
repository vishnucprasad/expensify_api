const transactionServices = require("../services/transaction");

exports.addTransaction = async (req, res, next) => {
    try {
        // Creating new transaction
        const transaction = await transactionServices.createTransaction(req.user._id, req.body);

        // Sending the new transaction as response
        res.status(201).json(transaction);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.editTransaction = async (req, res, next) => {
    try {
        // Update transaction
        const transaction = await transactionServices.editTransaction(req.user._id, req.params.id, req.body);

        // Sending the updated transaction as response
        res.status(200).json(transaction);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.deleteTransaction = async (req, res, next) => {
    try {
        // Delete transaction
        const transaction = await transactionServices.deleteTransaction(req.user._id, req.params.id);

        // Sending the deleted transaction as response
        res.status(200).json(transaction);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.getAllTransactions = async (req, res, next) => {
    try {
        // Getting transactions
        const transactions = await transactionServices.getAllTransactions(req.user._id);

        // Sending transactions as response
        res.status(200).json(transactions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}