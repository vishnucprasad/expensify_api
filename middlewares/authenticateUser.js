const passport = require("passport");

const authenticateUser = (req, res, next) => {
    passport.authenticate('jwt', { session: false },)(req, res, next);
}

module.exports = authenticateUser;