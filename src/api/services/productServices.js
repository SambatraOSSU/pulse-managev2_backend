import mongoose from "mongoose";
import productModel from "../models/productModel.js";
import stockModel from "../models/stockModel.js"
class productServices {
    async addproductService(productData) {
        try {
            const product = new productModel({ ...productData });

            const { name } = productData;
            const stockName = `${name}_stock`;
            const newStock = new stockModel({
                name: stockName,
                quantity: 50,
                product: product._id
            });

            // Sauvegarder le stock et le produit
            await newStock.save();
            return await product.save();
        } catch (err) {
            // Propager l'erreur en cas d'échec
            throw new Error(err.message);
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
    async putProductService(id, updateData) {
        try {
            const putProduct = await productModel.findByIdAndUpdate(id, updateData, { new: true, runValidator: true });
            console.log(putProduct);

            if (putProduct) {
                return putProduct;
            }
        } catch (err) {
            throw new Error(err);
        }
    }
}
export default new productServices()