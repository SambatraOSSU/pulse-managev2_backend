import productServices from "../services/productServices.js"

class productControllers {
    async addProduct(req, res) {
        const newProduct = await productServices.addproductService(req.body)
        if (!newProduct) {
            res.status(400).json({ Message: "error on add new product" })
        }
        return res.status(200).json(newProduct)
    }
    async getProduct(req,res) {
        const allProduct = await productServices.getProductService();
        if(!allProduct)
            {res.status(400).json({message:"product zero"})}
        return res.status(200).json(allProduct)
    }
}
export default new productControllers();