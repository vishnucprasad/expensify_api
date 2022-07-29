const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const transactionRouter = require("./transaction");

router.use('/user', userRouter);
router.use('/transaction', transactionRouter);

module.exports = router;