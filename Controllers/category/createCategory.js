const Category = require("../../models/category");

module.exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    if (category) {
      res.status(200).json({
        category,
        message: "Category created successfully",
        success: true,
      });
    } else {
      res.status(400).json({
        message: "Category not found",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
      success: false,
    });
  }
};
