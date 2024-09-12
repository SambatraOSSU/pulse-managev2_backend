import productServices from "../services/productServices.js";

class productControllers {
  async addProduct(req, res) {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log(req.body);
    const picture = {
      file_path: req.file.path,
      file_name: req.file.originalname,
      size: req.file.size,
    };

    const data = {
      ...req.body,
      picture,
    } // Correct ay to log an object


    try {
      const newProduct = await productServices.addProductService(data);

      return res.status(200).json(newProduct);
    } catch (error) {
      return res
        .status(400)
        .json({ Message: "Error adding new product", error: error.message });
    }
  }

  async getProduct(req, res) {
    try {
      const allProduct = await productServices.getProductService();
      if (!allProduct.length) {
        return res.status(400).json({ message: "No products found" });
      }
      return res.status(200).json(allProduct);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error fetching products", error: error.message });
    }
  }

  async deleteProduct(req, res) {
    const id = req.params.productId;
    try {
      const delProduct = await productServices.deleteProductService(id);
      if (!delProduct) {
        return res.status(400).json({ message: "Product not found" });
      }
      return res.status(200).json({ message: "Removed successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error deleting product", error: error.message });
    }
  }

  async putProduct(req, res) {
    const id = req.params.productId;
    const update = req.body;
    try {
      const putProduct = await productServices.putProductService(id, update);
      if (!putProduct) {
        return res.status(400).json({ message: "Error updating product" });
      }
      return res.json(putProduct);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error updating product", error: error.message });
    }
  }

  async putStock(req, res) {
    const id = req.params.productId;
    const update = req.body;
  }
}

export default new productControllers();
