import express from "express"
import clientControlller from "../controllers/clientController.js"

const router = express.Router();

router.post("/order", clientControlller.addOrder);
router.post('/auth/register', clientControlller.register)
router.post("/auth/login", clientControlller.login);
router.post("/order/delivery", clientControlller.delivery)

export default router;