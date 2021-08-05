const Product = require("../../models/product");

module.exports.addProductImage = async (req, res) => {
  try {
    const { filename } = req.files;
    const { productId } = req.body;
    if (!req.file) {
      throw new Error("File not found!");
    }
    let product = await Product.findById(productId);
    if (!product) {
      throw new Error("Product not found!");
    }
    product.images.push("https://" + requ.get("host") + "/images/" + filename);
    product.save();
  } catch {}
};
