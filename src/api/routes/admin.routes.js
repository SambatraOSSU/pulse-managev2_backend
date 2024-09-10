import express from "express"
import productControllers from "../controllers/productControllers.js"

const router = express.Router();

router.post('/add', productControllers.addProduct)
router.get("/getAll", productControllers.getProduct);
router.delete("/delete/:id",productControllers.deleteProduct)
router.put("/put/:id",productControllers.putProduct)

export default router;