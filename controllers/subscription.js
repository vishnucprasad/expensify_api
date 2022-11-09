const subscrtiptionServices = require("../services/subscription");

exports.addSubscription = async (req, res, next) => {
    try {
        // Creating new transaction
        await subscrtiptionServices.createNewSubscription(req.user._id, req.body);

        // Getting all transactions with userId
        const transactions = await subscrtiptionServices.getAllSubscriptions(req.user._id);

        // Sending all transactions of the user as response
        res.status(201).json(transactions);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}