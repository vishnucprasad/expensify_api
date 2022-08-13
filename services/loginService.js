const passport = require("passport");
const signJwt = require("../authentication/jwt");

const login = (req, res, next, done) => {
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

module.exports = login;