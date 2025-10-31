import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  internId: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  seniorManager: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true
  },
  // Feedback questions with short field names
  tasksHandled: {
    type: String, // What tasks or responsibilities did you handle?
    required: false
  },
  favProject: {
    type: String, // Which project or activity was most meaningful?
    required: false
  },
  teamExperience: {
    type: String, // Overall experience with team and mentor
    required: false
  },
  likedMost: {
    type: String, // What did you like most about internship?
    required: false
  },
  suggestions: {
    type: String, // Suggestions to improve internship
    required: false
  },
  skillsLearned: {
    type: String, // New skills learned or improved
    required: false
  },
  inchargeSupport: {
    type: String, // How helpful and supportive was your in-charge?
    required: false
  },
  inchargeFeedback: {
    type: String, // Did in-charge provide clear guidance & feedback?
    required: false
  },
  messageToIncharge: {
    type: String, // Any message or appreciation for in-charge
    required: false
  },
  followInstagram: {
    type: Boolean, // Are you following Graphura on Instagram?
    default: false
  },
  followLinkedIn: {
    type: Boolean, // Are you following Graphura on LinkedIn?
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model("Feedback", feedbackSchema,"Feedback");
