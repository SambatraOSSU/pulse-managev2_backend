import { Application } from "express"
import productServices from "../services/productServices.js"

class productControllers {
    async addProduct(){
        const newProduct = await productServices.addproductService(req.body)
        

        if(!newProduct){
            res.status(400).json({Message:"coucou"})
        }
    }
    async getProduct() {

    }
}
export default new productControllers();