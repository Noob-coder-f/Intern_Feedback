import Feedback from '../models/FeedbackDB.js';



export const submitFeedback = async (req, res) => {
  try {
    const {
      internUniqueId,
      internName,
      department,
      seniorOrManager,
      joiningDate,
      
      // Internship experience questions
      Q1_internship,
      Q2_internship,
      Q3_internship,
      Q4_internship,
      Q5_internship,
      Q6_internship,
      
      // Mentor feedback questions
      Q1_incharge,
      Q2_incharge,
      Q3_incharge,
      
      // Social media questions
      Q1_social,
      Q2_social
    } = req.body;

    // Validate required fields
    if (!internUniqueId || !internName || !department || !seniorOrManager || !joiningDate) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: internUniqueId, internName, department, seniorOrManager, or joiningDate'
      });
    }

    // Check if feedback already exists for this intern ID
    const existingFeedback = await Feedback.findOne({ internUniqueId });
    if (existingFeedback) {
      return res.status(409).json({
        success: false,
        message: 'Feedback already submitted for this intern ID'
      });
    }

    // Create new feedback document
    const newFeedback = new Feedback({
      // Intern Details
      internUniqueId: internUniqueId.trim(),
      internName: internName.trim(),
      department: department.trim(),
      seniorOrManager: seniorOrManager.trim(),
      joiningDate: new Date(joiningDate),

      // Internship Experience
      Q1_internship: {
        answer: Q1_internship?.answer?.trim() || ''
      },
      Q2_internship: {
        answer: Q2_internship?.answer?.trim() || ''
      },
      Q3_internship: {
        answer: Array.isArray(Q3_internship?.answer) ? Q3_internship.answer : []
      },
      Q4_internship: {
        answer: Q4_internship?.answer?.trim() || ''
      },
      Q5_internship: {
        answer: Q5_internship?.answer?.trim() || ''
      },
      Q6_internship: {
        answer: Q6_internship?.answer?.trim() || ''
      },

      // Mentor Feedback
      Q1_incharge: {
        answer: Q1_incharge?.answer || ''
      },
      Q2_incharge: {
        answer: Q2_incharge?.answer || ''
      },
      Q3_incharge: {
        answer: Q3_incharge?.answer?.trim() || ''
      },

      // Social Media
      Q1_social: {
        answer: Q1_social?.answer || ''
      },
      Q2_social: {
        answer: Q2_social?.answer || ''
      },

      // Default values
      status: 'Pending',
      formSubmissionDate: new Date()
    });

    // Save to database
    const savedFeedback = await newFeedback.save();

    // Success response
    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully..',
      data: {
        id: savedFeedback._id,
        internUniqueId: savedFeedback.internUniqueId,
        internName: savedFeedback.internName,
        department: savedFeedback.department,
        submissionDate: savedFeedback.formSubmissionDate,
        status: savedFeedback.status
      }
    });

  } catch (error) {
    console.error('Feedback submission error:', error);

    // Handle MongoDB validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Handle MongoDB duplicate key errors
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Feedback already exists for this intern ID'
      });
    }

    // Handle other errors
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
};


export const getFeedbacks = async (req, res) => {
  try {
    // Get all feedbacks from database
    const feedbacks = await Feedback.find({})
      .sort({ formSubmissionDate: -1 }) // Sort by latest first
      .select('-__v') // Exclude version key
      .lean();

    // If no feedbacks found
    if (!feedbacks || feedbacks.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No feedbacks found",
        data: [],
        count: 0
      });
    }

    // Return success response with feedbacks
    res.status(200).json({
      success: true,
      message: "Feedbacks retrieved successfully",
      data: feedbacks,
      count: feedbacks.length
    });

  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching feedbacks",
      error: process.env.NODE_ENV === 'production' ? {} : error.message
    });
  }
};



export const updateFeedbackStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    if (!status || !["Pending", "Reviewed"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Must be 'Pending' or 'Reviewed'"
      });
    }

    // Find and update feedback
    const feedback = await Feedback.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found"
      });
    }

    res.status(200).json({
      success: true,
      message: `Status updated to ${status} successfully`,
      data: feedback
    });

  } catch (error) {
    console.error('Error updating feedback status:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: "Invalid feedback ID"
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error while updating status",
      error: process.env.NODE_ENV === 'production' ? {} : error.message
    });
  }
};