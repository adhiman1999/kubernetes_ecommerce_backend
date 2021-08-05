const Product = require("../../models/product");

module.exports.addProduct = async (req, res) => {
  try {
    const product = new Product.create(req.body);
    if (product) {
      return res.status(200).json({
        success: true,
        message: "Product added successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Product not added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while creating the product",
      error,
      success: false,
    });
  }
};
