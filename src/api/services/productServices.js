import mongoose from "mongoose";
import productModel from "../models/productModel.js";
class productServices {
    async addproductService(productData) {
        try {
            const product = new productModel({ ...productData })
            return await product.save()
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async getProductService() {
        try {
            const allProduct = await productModel.find();
            return allProduct;
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
export default new productServices()