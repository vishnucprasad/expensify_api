const categoryServices = require("../services/category");

exports.addCategory = async (req, res, next) => {
    // Finding categories for the current user
    const categories = await categoryServices.getCategories(req, res, next);

    if (!!categories) {
        // Add category to the category list 
        await categoryServices.addCategory(req, res, next);

        // Sending updated category list as response
        return res.status(200).json(categories);
    }

    // Creating new category
    const category = await categoryServices.createCategory(req, res, next);

    // Sending new category as response
    return res.status(201).json(category);
}