import express from "express"
import productControllers from "../controllers/productControllers.js"

const router = express.Router();

router.post('/add', productControllers.addProduct)
router.get("/getAll", productControllers.getProduct);

export default router;