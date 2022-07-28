const jwt = require('jsonwebtoken');

const signJwt = (req, user, done) => {
    req.login(user, { session: false }, async (e) => {
        if (e) return done(e);

        // Signing new jwt
        const token = jwt.sign({ user }, process.env.JWT_SECRET);

        // Cookie options
        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }

        return done(null, token, options);
    });
}

module.exports = signJwt;