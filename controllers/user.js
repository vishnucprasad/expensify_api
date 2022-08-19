const userServices = require("../services/user");

exports.register = async (req, res, next) => {
    // Creating new user
    await userServices.createUser(req, res, next);

    // authenticate new user
    userServices.login(req, res, next, (e, user) => {
        if (e) return next(e);

        // Sending the new user as response
        res.status(201).json(user);
    });
}

exports.login = (req, res, next) => {
    // User authentication
    userServices.login(req, res, next, (e, user) => {
        if (e) return next(e);

        // Sending user data as response
        res.status(200).json(user);
    });
}

exports.getAuth = (req, res) => res.status(200).json({
    ...req.user,
    authToken: req.headers.authorization?.split(" ")[1]
});