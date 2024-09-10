import express from "express"
import productControllers from "../controllers/productControllers.js"

const router = express.Router();

router.post('/add', productControllers.addProduct)
// router.post("/login", productControllers.login);

export default router;