const categoryServices = require("../services/category");

exports.addCategory = async (req, res, next) => {
    try {
        // Finding categories for the current user
        const categories = await categoryServices.getCategories(req.user._id);

        if (!!categories) {
            // Add category to the category list 
            const categories = await categoryServices.addCategory(req.user._id, req.body.title, req.body.type);

            // Sending updated category list as response
            return res.status(200).json(categories);
        }

        // Creating new category
        const category = await categoryServices.createCategory(req.user._id, req.body.title, req.body.type);

        // Sending new category as response
        return res.status(201).json(category);
    } catch (e) {
        next(e);
    }
}

exports.editCategory = async (req, res, next) => {
    try {
        // Edit category
        const categories = await categoryServices.editCategory(req.user._id, req.params.id, req.body.title, req.body.type);

        // Sending edited category list as response
        res.status(200).json(categories);
    } catch (e) {
        next(e);
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        // Deleting category
        const categories = await categoryServices.deleteCategory(req.user._id, req.params.id);

        // Sending transactions as response
        res.status(200).json(categories);
    } catch (e) {
        next(e);
    }
}

exports.getCategories = async (req, res, next) => {
    try {
        // Get all categories with user id
        const categories = await categoryServices.getCategories(req.user._id);

        // Sending categories as response
        res.status(200).json(categories);
    } catch (e) {
        next(e);
    }
}