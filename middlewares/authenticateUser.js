const passport = require("passport");
const UnauthorizedError = require("../errors/unAuthorizedError");

const authenticateUser = (req, res, next) => {
    try {
        passport.authenticate('jwt', { session: false }, (e, user) => {
            if (e) if (!user) throw new UnauthorizedError();
            if (!user) throw new UnauthorizedError();

            return res.json({ ...user, authToken: req.headers.authorization.split(" ")[1] })
        })(req, res, next);
    } catch (e) {
        return next(e);
    }
}

module.exports = authenticateUser;