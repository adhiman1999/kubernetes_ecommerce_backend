const Category = require("../../models/category");
const Product = require("../../models/product");

module.exports.getProductWithCategory = async (req, res) => {
  try {
    const category = await Category.find({
      _id: req.params.categoryId,
    }).select("products");
    const productsIdList = category[0].products;
    const products = await Product.find({
      _id: { $in: productsIdList },
    }).select("title", "maxRetailprice", "minRetailprice");
    if (category && category[0].products) {
      return res.status(200).json({
        products,
        success: true,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "No products found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "An Error occurred while retrieving products",
      success: false,
      error,
    });
  }
};
