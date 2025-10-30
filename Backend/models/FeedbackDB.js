import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  // 🧩 1. Intern Details (no question field)
  internUniqueId: {
    type: String,
    required: true,
    trim: true,
  },
  internName: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  seniorOrManager: {
    type: String,
    required: true,
    trim: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },

  // 🧠 2. Internship Experience Overview
  tasksAndResponsibilities: {
    question: {
      type: String,
      default: "Briefly describe the tasks and responsibilities you handled:",
    },
    answer: { type: String, required: true },
  },
  meaningfulProject: {
    question: {
      type: String,
      default: "What project or work assignment did you find the most meaningful or engaging?",
    },
    answer: { type: String, required: true },
  },
  developedSkills: {
    question: {
      type: String,
      default: "Which skills did you develop or improve?",
    },
    answer: { type: [String], required: true },
  },
  otherSkillsDeveloped: {
    question: {
      type: String,
      default: "Other skills developed:",
    },
    answer: { type: String, default: "" },
  },

  // 📘 3. Learning & Support
  learningSupport: {
    question: {
      type: String,
      default: "How well did this internship help support your learning and professional growth?",
    },
    answer: {
      type: String,
      enum: ["Excellent", "Good", "Fair", "Needs Improvement"],
      required: true,
    },
    comment: { type: String, default: "NA" },
  },
  mentorSupport: {
    question: {
      type: String,
      default: "Did you receive helpful guidance and support from your supervisor/mentor?",
    },
    answer: {
      type: String,
      enum: ["Yes, consistently", "Sometimes", "Rarely", "No"],
      required: true,
    },
    comment: { type: String, default: "" },
  },

  // 🏢 4. Work Environment & Feedback
  teamExperience: {
    question: {
      type: String,
      default: "How would you describe your experience with the team and organizational culture?",
    },
    answer: { type: String, required: true },
  },
  inclusionFeeling: {
    question: {
      type: String,
      default: "Did you feel welcomed, included, and valued during your internship?",
    },
    answer: {
      type: String,
      enum: ["Yes", "Somewhat", "No"],
      required: true,
    },
    comment: { type: String, default: "" },
  },
  likedMost: {
    question: {
      type: String,
      default: "What did you like most about the internship program?",
    },
    answer: { type: String, required: true },
  },
  challengesFaced: {
    question: {
      type: String,
      default: "What challenges did you face during the internship (if any)?",
    },
    answer: { type: String, default: "" },
  },
  improvementSuggestions: {
    question: {
      type: String,
      default: "Suggestions for improving the internship program:",
    },
    answer: { type: String, default: "" },
  },

  // 🌐 5. Social Media Engagement
  socialMedia: {
    instagram: {
      question: {
        type: String,
        default: "Are you following us on Instagram?",
      },
      answer: { type: String, enum: ["Yes", "No"], required: true },
      link: { type: String, default: "" },
    },
    linkedIn: {
      question: {
        type: String,
        default: "Are you following us on LinkedIn?",
      },
      answer: { type: String, enum: ["Yes", "No"], required: true },
      link: { type: String, default: "" },
    },
  },

  // 🌟 6. Recommendation & Finalize
  recommendProgram: {
    question: {
      type: String,
      default: "Would you recommend this internship program to other students/interns?",
    },
    answer: { type: String, enum: ["Yes", "Maybe", "No"], required: true },
  },
  recommendToCollege: {
    question: {
      type: String,
      default: "Would you be happy if we gave this opportunity to your college as well?",
    },
    answer: { type: String, enum: ["Yes", "No"], required: true },
  },
  formSubmissionDate: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema, "Feedback");
export default Feedback; 
