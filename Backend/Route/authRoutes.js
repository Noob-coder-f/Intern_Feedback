import express from "express";
import { registerUser ,loginUser } from "../Controllers/UserControllers.js";

const router = express.Router();

// POST /api/register
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
