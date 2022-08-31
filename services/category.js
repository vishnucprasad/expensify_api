const objectId = require("mongoose").Types.ObjectId;
const Category = require("../models/category");

exports.createCategory = async (userId, title, type) => {
    // Creating new category
    const category = await Category.create({
        user: userId,
        categoryList: [{ title, type }]
    });

    // Return new category
    return category;
}

exports.addCategory = async (userId, title, type) => {
    // Adding new category to categorylist
    const categories = await Category.findOneAndUpdate(
        {
            user: objectId(userId),
        },
        {
            $push: {
                categoryList: { title, type }
            }
        },
        {
            new: true,
        }
    );

    // Return categories
    return categories;
}

exports.getCategories = async (userId) => {
    // Finding categories with user id
    const categories = await Category.findOne({
        user: objectId(userId)
    });

    // Return categories
    return categories;
}

exports.editCategory = async (userId, categoryId, title, type) => {
    // Updating category list with user id and category id
    const categories = await Category.findOneAndUpdate(
        {
            user: objectId(userId),
            'categoryList._id': objectId(categoryId)
        },
        {
            $set: {
                'categoryList.$.title': title,
                'categoryList.$.type': type
            }
        },
        {
            new: true,
        }
    );

    // Return updated category list
    return categories;
}

exports.deleteCategory = async (userId, categoryId) => {
    // Deleting category with category id from category list
    const categories = Category.findOneAndUpdate(
        {
            user: objectId(userId),
            'categoryList._id': objectId(categoryId),
        },
        {
            $pull: {
                categoryList: {
                    _id: objectId(categoryId),
                },
            }
        },
        {
            new: true,
        }
    );

    // Return updated category list
    return categories;
}