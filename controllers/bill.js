const billServices = require('../services/bill');

exports.addBill = async (req, res, next) => {
    try {
        // Creating new bill
        await billServices.createNewBill(req.user._id, req.body);

        // Getting all bills with userId
        const bills = await billServices.getAllBills(req.user._id);

        // Sending all bills of the user as response
        res.status(201).json(bills);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}