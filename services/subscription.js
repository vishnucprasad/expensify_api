const Subscription = require("../models/subscription");

exports.createNewSubscription = async (userId, transactionDetails) => {
    // Creating new subscription
    const subscription = await Subscription.create({
        user: userId,
        ...transactionDetails
    });

    // Return new subscription
    return subscription;
}

exports.getAllSubscriptions = async (userId) => {
    // Finding all subscriptions of the current user with userId
    const subscriptions = await Subscription
        .find({ user: userId })
        .sort({
            date: -1
        });

    // Return all subscriptions
    return subscriptions;
}