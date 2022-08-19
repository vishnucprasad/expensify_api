const ConflictError = require("../errors/conflictError");
const User = require("../models/user");
const login = require("../services/loginService");

exports.register = async (req, res, next) => {
    try {
        // Creating new user
        const user = await User.create(req.body);

        login(req, res, next, (e, user) => {
            if (e) return next(e);

            // Sending the new user as response
            res.status(201).json(user);
        });
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
    login(req, res, next, (e, user) => {
        if (e) return next(e);

        // Sending user data as response
        res.status(200).json(user);
    });
}

exports.getAuth = (req, res) => res.status(200).json({
    ...req.user,
    authToken: req.headers.authorization?.split(" ")[1]
});

exports.logout = (req, res) => res
    .status(200)
    .clearCookie(process.env.COOKIE_KEY)
    .json({ logout: true });