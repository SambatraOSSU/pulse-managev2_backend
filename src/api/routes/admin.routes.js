import express from "express"
import productControllers from "../controllers/productControllers.js"
import hasAccess from "../middlewares/bearerAccess.js";
const router = express.Router();

router.post('/add', productControllers.addProduct)
router.get("/getAll", hasAccess, productControllers.getProduct);
router.delete("/delete/:productId", productControllers.deleteProduct)
router.put("/put/:productId", productControllers.putProduct)

router.put("/stock/put/:productId", productControllers.putStock)

export default router;