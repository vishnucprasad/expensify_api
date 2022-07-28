const passport = require("passport");
const signJwt = require("../authentication/jwt");
const ConflictError = require("../errors/conflictError");
const User = require("../models/user");

exports.register = async (req, res, next) => {
    try {
        // Creating new user
        const user = await User.create(req.body);

        // Sending the new user as response
        res.status(201).json(user);
    } catch (e) {
        // Throwing an error if there is a user exist with same email
        if (e.keyValue && e.keyValue.email) return next(new ConflictError(`An account with email ${e.keyValue.email} aready exists!`, 'Conflict occured on user registration'));

        // Throwing an error if there is a user exist with same mobile number
        if (e.keyValue && e.keyValue.mobile) return next(new ConflictError(`An account with email ${e.keyValue.mobile} aready exists!`, 'Conflict occured on user registration'));

        // Passing error to error handler
        return next(e);
    }
}

exports.login = (req, res, next) => {
    // User authentication
    passport.authenticate('login', (e, user) => {
        try {
            if (e) return next(e);

            // Creating new authentication token
            signJwt(req, user, (e, token, options) => {
                if (e) return next(e);

                // Sending user data as response and setting authentication token to cookies
                res
                    .cookie(process.env.COOKIE_KEY, token, options)
                    .status(200)
                    .json(user);
            });
        } catch (e) {
            // Passing error to error handler
            return next(e);
        }
    })(req, res, next);
}

exports.getAuth = (req, res) => res.status(200).json(req.user);

exports.logout = (req, res) => res
    .status(200)
    .clearCookie(process.env.COOKIE_KEY)
    .json({ logout: true });