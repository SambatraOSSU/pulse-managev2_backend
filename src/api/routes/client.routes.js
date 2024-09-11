import express from "express"
import clientControlller from "../controllers/clientController.js"

const router = express.Router();

router.post('/auth/register', clientControlller.register)
router.post("/auth/login", clientControlller.login);
router.post("/commande",clientControlller.addOrder);

export default router;