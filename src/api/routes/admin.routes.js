import express from "express";
import productControllers from "../controllers/productControllers.js";
import hasAccess from "../middlewares/bearerAccess.js";
import adminController from "../controllers/adminController.js";
import upload from "../middlewares/upload.js";
const router = express.Router();

router.post(
  "/product/add",
  upload.single("image"),
  productControllers.addProduct
);
router.get("/product/getAll", hasAccess, productControllers.getProduct);
router.delete("/product/delete/:productId", productControllers.deleteProduct);
router.put("/product/put/:productId", productControllers.putProduct);
router.put("/product/stock/put/:productId", productControllers.putStock);

router.post("/auth/register", adminController.register);
router.post("/auth/login", adminController.login);

export default router;
