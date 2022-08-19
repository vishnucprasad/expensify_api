const passport = require("passport");
const UnauthorizedError = require("../errors/unAuthorizedError");

const authenticateUser = (req, res, next) => {
    try {
        passport.authenticate('jwt', {
            session: false
        })(req, res, next);
    } catch (e) {
        return next(e);
    }
}

module.exports = authenticateUser;