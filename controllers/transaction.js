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