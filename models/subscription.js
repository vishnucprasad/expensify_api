const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'you must provide {PATH}'],
    },
    amount: {
        type: Number,
        required: [true, 'you must provide {PATH}'],
        min: [1, '{PATH} must be greater than 0']
    },
    title: {
        type: String,
        required: [true, 'you must provide {PATH}'],
    },
    type: {
        type: 'String',
        required: [true, 'you must provide {PATH}'],
        enum: {
            values: ['Monthly', 'Quarterly', 'Annual'],
            message: '{VALUE} is not supported!',
        }
    },
    date: {
        type: Number,
        required: [true, 'you must provide {PATH}'],
    },
    note: {
        type: String,
    }
});

const Subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = Subscription;