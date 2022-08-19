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
            },
            {
                new: true,
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

exports.editCategory = async (req, res, next) => {
    try {
        // Updating category list with user id and category id
        const categories = await Category.findOneAndUpdate(
            {
                user: objectId(req.user._id),
                'categoryList._id': objectId(req.params.id)
            },
            {
                $set: {
                    'categoryList.$.title': req.body.title,
                    'categoryList.$.type': req.body.type
                }
            },
            {
                new: true,
            }
        );

        // Return updated category list
        return categories;
    } catch (e) {
        // Passing error to error handler
        next(e);
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        // Deleting category with category id from category list
        const categories = Category.findOneAndUpdate(
            {
                user: objectId(req.user._id),
                'categoryList._id': objectId(req.params.id),
            },
            {
                $pull: {
                    categoryList: {
                        _id: objectId(req.params.id),
                    },
                }
            },
            {
                new: true,
            }
        );

        // Return updated category list
        return categories;
    } catch (e) {
        next(e);
    }
}