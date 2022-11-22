const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const billSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: [true, 'You must provide {PATH}']
    },
    amount: {
        type: Number,
        required: [true, 'You must provide {PATH}'],
    },
    title: {
        type: String,
        required: [true, 'You must provide {PATH}']
    },
    billDate: {
        type: Number,
        required: [true, 'You must provide {PATH}'],
    },
    dueDate: {
        type: Number,
        required: [true, 'You must provide {PATH}'],
    },
    payedOn: {
        type: Number,
    },
    note: {
        type: String,
    }
});

const Bill = mongoose.model('bill', billSchema);

module.exports = Bill;