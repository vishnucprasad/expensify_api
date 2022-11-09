const subscrtiptionServices = require("../services/subscription");

exports.addSubscription = async (req, res, next) => {
    try {
        // Creating new subscription
        await subscrtiptionServices.createNewSubscription(req.user._id, req.body);

        // Getting all subscriptions with userId
        const subscriptions = await subscrtiptionServices.getAllSubscriptions(req.user._id);

        // Sending all subscriptions of the user as response
        res.status(201).json(subscriptions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.deleteSubscription = async (req, res, next) => {
    try {
        // Delete subscription
        await subscrtiptionServices.deleteSubscription(req.user._id, req.params.id);

        // Getting all subscriptions with userId
        const subscriptions = await subscrtiptionServices.getAllSubscriptions(req.user._id);

        // Sending all subscriptions of the user as response
        res.status(200).json(subscriptions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.editSubscription = async (req, res, next) => {
    try {
        // Update subscription
        await subscrtiptionServices.editSubscription(req.user._id, req.params.id, req.body);

        // Getting all subscriptions with userId
        const subscriptions = await subscrtiptionServices.getAllSubscriptions(req.user._id);

        // Sending all subscriptions of the user as response
        res.status(200).json(subscriptions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.getAllSubscriptions = async (req, res, next) => {
    try {
        // Getting all subscriptions with userId
        const subscriptions = await subscrtiptionServices.getAllSubscriptions(req.user._id);

        // Sending all subscriptions of the user as response
        res.status(200).json(subscriptions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}