const objectId = require("mongoose").Types.ObjectId;
const Transaction = require('../models/transaction');

exports.addTransaction = async (req, res, next) => {
    try {
        // Creating new transaction
        const transaction = await Transaction.create({
            user: req.user._id,
            ...req.body
        });

        // Sending the new transaction as response
        res.status(201).json(transaction);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.editTransaction = async (req, res, next) => {
    try {
        // Updating transaction using userId and transactionId
        const transaction = await Transaction.findOneAndUpdate({
            _id: objectId(req.params.transactionId),
            user: objectId(req.user._id)
        }, {
            ...req.body
        }, {
            new: true
        });

        // Sending the updated transaction as response
        res.status(200).json(transaction);
    } catch (e) {
        return next(e);
    }
}