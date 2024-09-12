import mongoose from "mongoose";
import productModel from "../models/productModel.js";
import stockModel from "../models/stockModel.js";

class ProductService {
  async addProductService(productData) {
    try {
      console.log("data post:", productData);
      const product = new productModel({ ...productData });
      const { productName } = productData;
      const stockName = `${productName}_stock`;
      const newStock = new stockModel({
        name: stockName,
        quantity: 50,
        product: product._id,
      });
      await product.save();
      await newStock.save();
      return product;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new ProductService();
