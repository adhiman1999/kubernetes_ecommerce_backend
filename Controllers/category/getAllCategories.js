const Category = require("../../models/category.js");
const Product = require("../../models/product.js");

module.exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories) {
      res.status(200).json({
        categories,
        success: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
