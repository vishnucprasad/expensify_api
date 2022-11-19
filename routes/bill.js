const express = require('express');
const router = express.Router();
const authenticateUser = require('../middlewares/authenticateUser');
const billController = require('../controllers/bill');

router.use(authenticateUser);

router.post('/', billController.addBill);
router.patch('/:id', billController.editBill);
router.delete('/:id', billController.deleteBill);

module.exports = router;