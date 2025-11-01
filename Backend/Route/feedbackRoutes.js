import express from "express";
import { submitFeedback,getFeedbacks,updateFeedbackStatus } from "../Controllers/FeedbackController.js";
import {verifyToken} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/submit-feedback", submitFeedback);
router.get("/feedbacks", verifyToken, getFeedbacks);
router.patch("/feedbacks/:id/status", verifyToken, updateFeedbackStatus);

export default router;
