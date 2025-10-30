import express from "express";
import { registerUser } from "../Controllers/UserControllers.js";

const router = express.Router();

// POST /api/register
router.post("/register", registerUser);

export default router;
