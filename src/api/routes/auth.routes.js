import express from "express"
import AuthControlller from "../controllers/authController.js"

const router = express.Router();

router.post('/register', AuthControlller.register)
router.post("/login", AuthControlller.login);

export default router;