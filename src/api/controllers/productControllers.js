import productServices from "../services/productServices.js"

class productControllers {
    async addProduct(req,res) {
        const newProduct = await productServices.addproductService(req.body)
        if (!newProduct) {
            res.status(400).json({ Message: "error on add new product" })
        }
        return res.status(200).json(newProduct)
    }
    async getProduct() {
    }
}
export default new productControllers();