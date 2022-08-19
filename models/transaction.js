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
        default: function () {
            const _this = this.toObject(); // tslint:disable-line
            return `${_this.category} - ${_this.transactionType}`;
        }
    }
});

const Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;