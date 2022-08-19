const categoryServices = require("../services/category");

exports.addCategory = async (req, res, next) => {
    // Finding categories for the current user
    const categories = await categoryServices.getCategories(req, res, next);

    if (!!categories) {
        // Add category to the category list 
        const categories = await categoryServices.addCategory(req, res, next);

        // Sending updated category list as response
        return res.status(200).json(categories);
    }

    // Creating new category
    const category = await categoryServices.createCategory(req, res, next);

    // Sending new category as response
    return res.status(201).json(category);
}

exports.editCategory = async (req, res, next) => {
    // Edit category
    const categories = await categoryServices.editCategory(req, res, next);

    // Sending edited category list as response
    res.status(200).json(categories);
}

exports.deleteCategory = async (req, res, next) => {
    // Deleting category
    const categories = await categoryServices.deleteCategory(req, res, next);

    // Sending transactions as response
    res.status(200).json(categories);
}