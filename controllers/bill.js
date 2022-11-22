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

exports.editBill = async (req, res, next) => {
    try {
        // Update bill
        await billServices.editBill(req.user._id, req.params.id, req.body);

        // Getting all bills with userId
        const bills = await billServices.getAllBills(req.user._id);

        // Sending all bills of the user as response
        res.status(200).json(bills);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.deleteBill = async (req, res, next) => {
    try {
        // Delete bill
        await billServices.deleteBill(req.user._id, req.params.id);

        // Getting all bills with userId
        const bills = await billServices.getAllBills(req.user._id);

        // Sending all bills of the user as response
        res.status(200).json(bills);
    } catch (e) {
        // Passing error to error handler
        console.log(e);
        return next(e);
    }
}

exports.getAllBills = async (req, res, next) => {
    try {
        // Getting all bills with userId
        const bills = await billServices.getAllBills(req.user._id);

        // Sending all bills of the user as response
        res.status(200).json(bills);
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}