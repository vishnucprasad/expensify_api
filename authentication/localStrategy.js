const localStrategy = require("passport-local").Strategy;
const UnauthorizedError = require("../errors/unAuthorizedError");
const User = require("../models/user");

const userLocalStrategy = () => new localStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async (email, password, done) => {
        try {
            // Finding user with email
            const user = await User.findOne({ email });

            // Throwing an error if there is no user with the provided email address
            if (!user) throw new UnauthorizedError('User login unauthorized, account not found!', 'Unauthorized');

            // Checking password
            const valid = await user.isValidPassword(password);

            // Throwing an error if the password is incorrect
            if (!valid) throw new UnauthorizedError('User login unauthorized, incorrect password!', 'Unauthorized');

            // Return user data
            return done(null, user, { message: "Logged in Successfully" });
        } catch (e) {
            return done(e);
        }
    }
);

module.exports = userLocalStrategy;