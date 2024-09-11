import express from "express"
import clientControlller from "../controllers/clientController.js"

const router = express.Router();

router.post('/register', clientControlller.register)
router.post("/login", clientControlller.login);
router.post("/commande",clientControlller.addOrder);

export default router;