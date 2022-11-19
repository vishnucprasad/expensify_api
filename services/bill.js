const Bill = require("../models/bill");
const objectId = require('mongoose').Types.ObjectId;

exports.createNewBill = async (userId, billDetails) => {
    // Creating new bill
    const bill = await Bill.create({
        user: userId,
        ...billDetails
    });

    // Return new bill
    return bill;
}

exports.editBill = async (userId, billId, patch) => {
    // Updating bill using userId and bill id
    const bill = await Bill.findOneAndUpdate({
        _id: objectId(billId),
        user: objectId(userId)
    }, {
        ...patch
    }, {
        new: true
    });

    // Return edited bill
    return bill;
}

exports.deleteBill = async (userId, billId) => {
    // Deleteing bill using userId and bill id
    const bill = await Bill.findOneAndDelete({
        _id: objectId(billId),
        user: objectId(userId)
    });

    // Return deleted bill
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