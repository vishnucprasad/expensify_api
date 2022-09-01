const transactionServices = require("../services/transaction");

exports.addTransaction = async (req, res, next) => {
    try {
        // Creating new transaction
        await transactionServices.createTransaction(req.user._id, req.body);

        // Getting all transactions with userId
        const transactions = await transactionServices.getAllTransactions(req.user._id);

        // Sending all transactions of the user as response
        res.status(201).json(transactions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.editTransaction = async (req, res, next) => {
    try {
        // Update transaction
        await transactionServices.editTransaction(req.user._id, req.params.id, req.body);

        // Getting all transactions with userId
        const transactions = await transactionServices.getAllTransactions(req.user._id);

        // Sending all transactions of the user as response
        res.status(200).json(transactions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.deleteTransaction = async (req, res, next) => {
    try {
        // Delete transaction
        await transactionServices.deleteTransaction(req.user._id, req.params.id);

        // Getting all transactions with userId
        const transactions = await transactionServices.getAllTransactions(req.user._id);

        // Sending all transactions of the user as response
        res.status(200).json(transactions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.getAllTransactions = async (req, res, next) => {
    try {
        // Getting all transactions with userId
        const transactions = await transactionServices.getAllTransactions(req.user._id);

        // Sending all transactions of the user as response
        res.status(200).json(transactions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}