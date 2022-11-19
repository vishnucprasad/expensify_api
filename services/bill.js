const Bill = require("../models/bill");

exports.createNewBill = async (userId, billDetails) => {
    // Creating new bill
    const bill = await Bill.create({
        user: userId,
        ...billDetails
    });

    // Return new bill
    return bill;
}

exports.getAllBills = async (userId) => {
    // Finding all bills of the current user with userId
    const bills = await Bill
        .find({ user: userId })
        .sort({
            date: -1
        });

    // Return all bills
    return bills;
}