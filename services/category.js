const objectId = require("mongoose").Types.ObjectId;
const Category = require("../models/category");

exports.createCategory = async (req, res, next) => {
    try {
        // Creating new category
        const category = await Category.create({
            user: req.user._id,
            categoryList: [
                {
                    title: req.body.title,
                    type: req.body.type,
                }
            ]
        });

        // Return new category
        return category;
    } catch (e) {
        // Passing error to error handler
        return next(e);
    }
}

exports.addCategory = async (req, res, next) => {
    try {
        // Adding new category to categorylist
        const categories = await Category.findOneAndUpdate(
            {
                user: objectId(req.user._id),
            },
            {
                $push: {
                    categoryList: {
                        title: req.body.title,
                        type: req.body.type,
                    }
                }
            }
        );

        // Return categories
        return categories;
    } catch (e) {
        // Passing error to error handler
        next(e);
    }
}

exports.getCategories = async (req, res, next) => {
    try {
        // Finding categories with user id
        const categories = await Category.findOne({
            user: objectId(req.user._id)
        });

        // Return categories
        return categories;
    } catch (e) {
        // Passing error to error handler
        next(e);
    }
}