const transactionServices = require("../services/transaction");

exports.addTransaction = async (req, res, next) => {
    // Creating new transaction
    const transaction = await transactionServices.createTransaction(req, res, next);

    // Sending the new transaction as response
    res.status(201).json(transaction);
}

exports.editTransaction = async (req, res, next) => {
    // Update transaction
    const transaction = await transactionServices.editTransaction(req, res, next);

    // Sending the updated transaction as response
    res.status(200).json(transaction);
}

exports.deleteTransaction = async (req, res, next) => {
    // Delete transaction
    const transaction = await transactionServices.deleteTransaction(req, res, next);

    // Sending the deleted transaction as response
    res.status(200).json(transaction);
}

exports.getAllTransactions = async (req, res, next) => {
    // Getting transactions
    const transactions = await transactionServices.getAllTransactions(req, res, next);

    // Sending transactions as response
    res.status(200).json(transactions);
}