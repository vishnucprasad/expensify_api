const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const transactionRouter = require("./transaction");
const categoryRouter = require("./category");

router.use('/user', userRouter);
router.use('/transaction', transactionRouter);
router.use('/category', categoryRouter);

module.exports = router;