const objectId = require("mongoose").Types.ObjectId;
const Transaction = require('../models/transaction');

exports.createTransaction = async (req, res, next) => {
    try {
        // Creating new transaction
        const transaction = await Transaction.create({
            user: req.user._id,
            ...req.body
        });

        // Return new transaction
        return transaction;
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.editTransaction = async (req, res, next) => {
    try {
        // Updating transaction using userId and transaction id
        const transaction = await Transaction.findOneAndUpdate({
            _id: objectId(req.params.id),
            user: objectId(req.user._id)
        }, {
            ...req.body
        }, {
            new: true
        });

        // Return edited transaction
        return transaction;
    } catch (e) {
        return next(e);
    }
}

exports.deleteTransaction = async (req, res, next) => {
    try {
        // Deleteing transaction using userId and transaction id
        const transaction = await Transaction.findOneAndDelete({
            _id: objectId(req.params.id),
            user: objectId(req.user._id)
        });

        // Return deleted transaction
        return transaction;
    } catch (e) {
        return next(e);
    }
}

exports.getAllTransactions = async (req, res, next) => {
    try {
        // Finding all transactions of the current user with userId
        const transactions = await Transaction.find({
            user: objectId(req.user._id),
        });

        // Return all transactions
        return transactions;
    } catch (e) {
        return next(e);
    }
}