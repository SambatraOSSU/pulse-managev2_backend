import mongoose from "mongoose";
import productModel from "../models/productModels.js";
class productServices{
    async addproductService(){
            try{
                const product = new productModel({...productData})
                return await product.save()
                
            }
            catch(err){
                throw new Error(err);
            }
    }
    // async getProductService{
    //         try{
    //             // const produits = await Produit.find();
    //             console.log('coucou');
                
    //         }
    //         catch(err){
    //             throw new error(err)
    //         }
    // }
}
export default new productServices()