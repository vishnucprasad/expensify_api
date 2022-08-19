const passport = require("passport");
const signJwt = require("../authentication/jwt");
const ConflictError = require("../errors/conflictError");
const User = require("../models/user");

exports.createUser = async (req, res, next) => {
    try {
        // Creating new user
        const user = await User.create(req.body);

        return user;
    } catch (e) {
        // Throwing an error if there is a user exist with same email
        if (e.keyValue && e.keyValue.email) return next(new ConflictError(`An account with email ${e.keyValue.email} aready exists!`, 'Conflict occured on user registration'));

        // Throwing an error if there is a user exist with same mobile number
        if (e.keyValue && e.keyValue.mobile) return next(new ConflictError(`An account with email ${e.keyValue.mobile} aready exists!`, 'Conflict occured on user registration'));

        // Passing error to error handler
        return next(e);
    }
};

exports.login = (req, res, next, done) => {
    passport.authenticate('login', (e, user) => {
        try {
            if (e) return next(e);

            // Creating new authentication token
            signJwt(req, user, (e, token) => {
                if (e) return done(e);

                const auth = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    authToken: token,
                }

                return done(null, auth);
            });

        } catch (e) {
            // Passing error to error handler
            return done(e);
        }
    })(req, res, next);
}