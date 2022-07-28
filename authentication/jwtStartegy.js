const JWTstrategy = require("passport-jwt").Strategy;

const userJwtStrategy = () => new JWTstrategy(
    {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: (req) => {
            let token = null;

            // Geting authentication Token from cookies
            if (req && req.cookies) token = req.cookies[process.env.COOKIE_KEY];
            return token;
        },
    },
    async (token, done) => done(null, token.user)
);

module.exports = userJwtStrategy;