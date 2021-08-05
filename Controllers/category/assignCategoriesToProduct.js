const Category = require("../../models/category");
const Product = require("../../models/product");

module.exports.assignCategoriesToProduct = async (req, res) => {
  try {
    const categories = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      { category: [...categories] },
      { new: true }
    );
    if (product) {
      await Category.updateMany(
        { _id: { $in: categories } },
        { $addToSet: { products: product._id } }
      );
      return res.json({
        message: "Category assigned successfully",
        success: true,
      });
    } else {
      return res.json({
        message: "Category not assigned",
        success: false,
      });
    }
  } catch (error) {
    return res.json({
      message: "Category not assigned",
      success: false,
    });
  }
};
