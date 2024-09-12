import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  picture: {
    file_path: { type: String, required: true },
    file_name: { type: String, required: true },
    size: { type: Number, required: true }
  }
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
