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
    async deleteProductService(id) {
        try {
            const delProduct = await productModel.findByIdAndDelete(id);
            return delProduct;

        }
        catch (err) {
            throw new Error(err);
        }
    }
    async putProductService(id){
            const putProduct = await productModel.findOneAndUpdate(id);
            return putProduct;
    }
}
export default new productServices()