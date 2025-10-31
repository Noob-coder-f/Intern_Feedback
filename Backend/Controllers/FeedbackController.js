import Feedback from "../models/feedbackForm.js";

// Create feedback (POST)
export const createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ success: true, message: "Feedback submitted successfully!", data: feedback });
  } catch (error) {
    res.status(400).json({ success: false, message: "Failed to submit feedback", error: error.message });
  }
};
