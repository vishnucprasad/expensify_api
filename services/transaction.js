const objectId = require("mongoose").Types.ObjectId;
const Transaction = require('../models/transaction');

exports.createTransaction = async (userId, transactionDetails) => {
    // Creating new transaction
    const transaction = await Transaction.create({
        user: userId,
        ...transactionDetails
    });

    // Return new transaction
    return transaction;
}

exports.editTransaction = async (userId, transactionId, patch) => {
    // Updating transaction using userId and transaction id
    const transaction = await Transaction.findOneAndUpdate({
        _id: objectId(transactionId),
        user: objectId(userId)
    }, {
        ...patch
    }, {
        new: true
    });

    // Return edited transaction
    return transaction;
}

exports.deleteTransaction = async (userId, transactionId) => {
    // Deleteing transaction using userId and transaction id
    const transaction = await Transaction.findOneAndDelete({
        _id: objectId(transactionId),
        user: objectId(userId)
    });

    // Return deleted transaction
    return transaction;
}

exports.getAllTransactions = async (userId) => {
    // Finding all transactions of the current user with userId
    const transactions = await Transaction.aggregate()
        .match({ user: objectId(userId) })
        .lookup({
            from: 'categories',
            foreignField: 'user',
            localField: 'user',
            as: 'categoryDetails'
        })
        .unwind({ path: '$categoryDetails' })
        .unwind({ path: '$categoryDetails.categoryList' })
        .match({
            $expr: {
                $eq: [
                    "$categoryDetails.categoryList._id",
                    "$category"
                ]
            }
        })
        .project({
            _id: 1,
            amount: 1,
            date: 1,
            note: 1,
            category: '$categoryDetails.categoryList'
        }).sort({
            date: -1
        });

    // Return all transactions
    return transactions;
}