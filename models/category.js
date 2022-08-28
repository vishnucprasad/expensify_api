const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: [true, 'you must provide {PATH}'],
        unique: true,
    },
    categoryList: {
        type: [
            {
                _id: {
                    type: mongoose.Types.ObjectId,
                    index: true,
                    required: true,
                    auto: true,
                },
                title: {
                    type: String,
                    required: [true, 'you must provide {PATH}'],
                },
                type: {
                    type: 'String',
                    required: [true, 'you must provide {PATH}'],
                    enum: {
                        values: ['income', 'expense'],
                        message: '{VALUE} is not supported!',
                    }
                },
            }
        ]
    },
});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;