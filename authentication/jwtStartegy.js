const JWTstrategy = require("passport-jwt").Strategy;

const userJwtStrategy = () => new JWTstrategy(
    {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: (req) => {
            let token = null;

            // Geting authentication Token from request headers
            if (req && req.headers) token = req.headers.authorization.split(" ")[1];
            return token;
        },
    },
    async (token, done) => done(null, token.user)
);

module.exports = userJwtStrategy;