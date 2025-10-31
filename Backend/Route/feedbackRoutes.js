import express from "express";
import { createFeedback } from "../Controllers/FeedbackController.js";

const router = express.Router();

router.post("/feedback", createFeedback);

export default router;
