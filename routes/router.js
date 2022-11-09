const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const transactionRouter = require("./transaction");
const categoryRouter = require("./category");
const subscriptionRouter = require("./subscriptions");

router.use('/user', userRouter);
router.use('/transaction', transactionRouter);
router.use('/category', categoryRouter);
router.use('/subscription', subscriptionRouter);

module.exports = router;