const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user: {
        type: String,
        type: Schema.Types.ObjectId,
        required: [true, 'you must provide {PATH}'],
    },
    amount: {
        type: Number,
        required: [true, 'you must provide {PATH}'],
        min: [1, '{PATH} must be greater than 0']
    },
    category: {
        type: String,
        required: [true, 'you must provide {PATH}']
    },
    date: {
        type: Number,
        required: [true, 'you must provide {PATH}'],
    },
    transactionType: {
        type: 'String',
        required: [true, 'you must provide {PATH}'],
        enum: {
            values: ['income', 'expense'],
            message: '{VALUE} is not supported!',
        }
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