const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");
const authenticateUser = require("../middlewares/authenticateUser");

// Authentication Middleware
router.use(authenticateUser);

// Private Routes
router.post('/', categoryController.addCategory);
router.patch('/:id', categoryController.editCategory);
router.delete('/:id', categoryController.deleteCategory);
router.get('/', categoryController.getCategories);

module.exports = router;