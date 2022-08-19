const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'you must provide {PATH}'],
    },
    amount: {
        type: Number,
        required: [true, 'you must provide {PATH}'],
        min: [1, '{PATH} must be greater than 0']
    },
    category: {
        type: Schema.Types.ObjectId,
        required: [true, 'you must provide {PATH}'],
    },
    date: {
        type: Number,
        required: [true, 'you must provide {PATH}'],
    },
    note: {
        type: String,
    }
});

const Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;