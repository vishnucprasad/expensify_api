const passport = require("passport");
const signJwt = require("../authentication/jwt");
const User = require("../models/user");

exports.createUser = async (req, res, next) => {
    // Creating new user
    const user = await User.create(req.body);

    return user;
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