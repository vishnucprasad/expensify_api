const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'you must provide {PATH}'],
        trim: true,
        minlength: [3, '{PATH} must be at least 4 charecters, got {VALUE}'],
    },
    lastName: {
        type: String,
        required: [true, 'you must provide {PATH}'],
        trim: true,
        minlength: [2, '{PATH} must be at least 2 charecters, got {VALUE}'],
    },
    email: {
        type: String,
        required: [true, 'you must provide {PATH}'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'you must provide {PATH}'],
    }
});

userSchema.pre('save', async function (next) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
});

userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;

    return user;
}

userSchema.methods.isValidPassword = async function (password) {
    const user = this;

    return await bcrypt.compare(password, user.password);
}

const User = mongoose.model('user', userSchema);

module.exports = User;