import productServices from "../services/productServices.js"
class productControllers {
    async addProduct(req, res) {
        const newProduct = await productServices.addproductService({
            ...req.body, picture, productSize: sizeArray, category: categoryArray
        })
        if (!newProduct) {
            res.status(400).json({ Message: "error on add new product" })
        }
        const picture = {
            file_path: req.file.path,
            file_name: req.file.originalname,
            size: req.file.size,
        };
        const sizeArray = productSize.split(",");
        const categoryArray = category.split(",");
        return res.status(200).json(newProduct);
    }


    async getProduct(req, res) {
        const allProduct = await productServices.getProductService();
        if (!allProduct) { res.status(400).json({ message: "product zero" }) }
        return res.status(200).json(allProduct)
    }
    async deleteProduct(req, res) {
        const id = req.params.productId
        const delProduct = await productServices.deleteProductService(id)
        return res.status(200).json({ message: "removed with succed" })

    }
    async putProduct(req, res) {
        const id = req.params.productId
        const update = req.body
        const putProduct = await productServices.putProductService(id, update)
        if (!putProduct) {
            res.status(400).json({ message: "error" })
        }
        return res.json(putProduct)
    }
    async putStock(req, res) {
        const id = req.params;
        const update = req.body;
    }
}
export default new productControllers();