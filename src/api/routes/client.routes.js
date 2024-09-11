import express from "express"
import AuthControlller from "../controllers/clientController.js"

const router = express.Router();

router.post('/register', AuthControlller.register)
router.post("/login", AuthControlller.login);

export default router;