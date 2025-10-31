import React, { useState, useEffect } from "react";

const DashboardNavbar = ({ userName, onLogout }) => (
  <nav className="flex items-center justify-between px-8 py-5 bg-white rounded-t-3xl border-b shadow-sm">
    <h2 className="text-2xl font-bold text-[#5446e0]">Intern Feedback Dashboard</h2>
    <div className="flex items-center gap-4">
      <span className="bg-blue-50 px-4 py-2 rounded-xl text-blue-700 font-bold flex items-center shadow">
        <span role="img" aria-label="wave" className="mr-2">👋</span>
        {userName}
      </span>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-xl shadow-lg focus:outline-none transition"
        onClick={onLogout}
      >
        <span className="mr-1 text-lg">⎋</span> Logout
      </button>
    </div>
  </nav>
);

const InfoCard = ({ title, value, gradient, icon }) => (
  <div className={`flex flex-col justify-between rounded-2xl shadow-lg p-6 w-full min-h-[120px] ${gradient}`}>
    <div className="flex items-center justify-between">
      <span className="font-bold text-white uppercase">{title}</span>
      {icon}
    </div>
    <div className="flex items-end mt-5">
      <span className="text-3xl font-extrabold text-white">{value}</span>
    </div>
  </div>
);

const StatusBadge = ({ status, onClick, isClickable = false }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Reviewed":
        return "bg-green-400 text-white hover:bg-green-500";
      case "Pending":
        return "bg-yellow-400 text-white hover:bg-yellow-500";
      default:
        return "bg-gray-400 text-white hover:bg-gray-500";
    }
  };

  return (
    <span
      className={`px-4 py-1 rounded-2xl font-bold text-sm shadow-md transition-all duration-200 ${isClickable ? "cursor-pointer transform hover:scale-105" : "cursor-default"
        } ${getStatusStyles(status)}`}
      onClick={isClickable ? onClick : undefined}
      title={isClickable ? "Click to change status" : ""}
    >
      {status}
    </span>
  );
};

const FeedbackModal = ({ feedback, isOpen, onClose, onStatusUpdate }) => {
  const [localStatus, setLocalStatus] = useState(feedback?.status);

  useEffect(() => {
    setLocalStatus(feedback?.status);
  }, [feedback]);

  if (!isOpen || !feedback) return null;

  const handleStatusChange = async (newStatus) => {
    try {
      await onStatusUpdate(feedback._id, newStatus);
      setLocalStatus(newStatus);
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#5446e0]">
              Feedback Details - {feedback.internName}
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Status:</span>
                <StatusBadge
                  status={localStatus}
                  onClick={() => handleStatusChange(localStatus === "Pending" ? "Reviewed" : "Pending")}
                  isClickable={true}
                />
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Intern Details */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
            <div>
              <strong>Unique ID:</strong> {feedback.internUniqueId}
            </div>
            <div>
              <strong>Department:</strong> {feedback.department}
            </div>
            <div>
              <strong>Manager/Senior:</strong> {feedback.seniorOrManager}
            </div>
            <div>
              <strong>Joining Date:</strong> {new Date(feedback.joiningDate).toLocaleDateString()}
            </div>
          </div>

          {/* Intern Feedback Section */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-[#5446e0] mb-4">Intern Feedback</h4>
            <div className="space-y-6">
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q1_internship.question}
                </label>
                <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px]">
                  {feedback.Q1_internship.answer || "No response provided"}
                </p>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q2_internship.question}
                </label>
                <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px]">
                  {feedback.Q2_internship.answer || "No response provided"}
                </p>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q3_internship.question}
                </label>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  {Array.isArray(feedback.Q3_internship.answer) && feedback.Q3_internship.answer.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1">
                      {feedback.Q3_internship.answer.map((skill, index) => (
                        <li key={index} className="text-gray-700">{skill}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No skills listed</p>
                  )}
                </div>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q4_internship.question}
                </label>
                <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px]">
                  {feedback.Q4_internship.answer || "No response provided"}
                </p>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q5_internship.question}
                </label>
                <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px]">
                  {feedback.Q5_internship.answer || "No response provided"}
                </p>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q6_internship.question}
                </label>
                <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px]">
                  {feedback.Q6_internship.answer || "No response provided"}
                </p>
              </div>
            </div>
          </div>

          {/* In-charge Feedback Section */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-[#5446e0] mb-4">In-charge Feedback</h4>
            <div className="space-y-6">
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q1_incharge.question}
                </label>
                <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px]">
                  {feedback.Q1_incharge.answer || "No response provided"}
                </p>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q2_incharge.question}
                </label>
                <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px]">
                  {feedback.Q2_incharge.answer || "No response provided"}
                </p>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q3_incharge.question}
                </label>
                <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px]">
                  {feedback.Q3_incharge.answer || "No response provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-[#5446e0] mb-4">Social Media Engagement</h4>
            <div className="space-y-6">
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q1_social.question}
                </label>
                <div className="flex items-center gap-4">
                  <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px] flex-1">
                    {feedback.Q1_social.answer || "No response provided"}
                  </p>
                </div>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-2">
                  {feedback.Q2_social.question}
                </label>
                <div className="flex items-center gap-4">
                  <p className="p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px] flex-1">
                    {feedback.Q2_social.answer || "No response provided"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 pt-6 border-t">
            <div className="text-sm text-gray-500">
              Submitted on: {new Date(feedback.formSubmissionDate).toLocaleDateString()}
            </div>
            <button
              onClick={onClose}
              className="bg-[#5446e0] hover:bg-[#4538d0] text-white font-bold py-2 px-6 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const exportCSV = (data) => {
  // Enhanced headers with questions
  const headers = [
    // Basic Info
    "Name", "Unique ID", "Department", "Manager/Senior", "Joining Date", "Status", "Submission Date",

    // Intern Feedback Questions
    "Intern Q1: Tasks & Responsibilities",
    "Intern A1: Answer",
    "Intern Q2: Most Meaningful Project",
    "Intern A2: Answer",
    "Intern Q3: Skills Learned",
    "Intern A3: Answer",
    "Intern Q4: Team Experience",
    "Intern A4: Answer",
    "Intern Q5: Liked Most",
    "Intern A5: Answer",
    "Intern Q6: Suggestions",
    "Intern A6: Answer",

    // In-charge Feedback Questions
    "In-charge Q1: Support Level",
    "In-charge A1: Answer",
    "In-charge Q2: Guidance Frequency",
    "In-charge A2: Answer",
    "In-charge Q3: Message to In-charge",
    "In-charge A3: Answer",

    // Social Media Questions
    "Social Q1: Instagram Follow",
    "Social A1: Answer",
    "Social Q2: LinkedIn Follow",
    "Social A2: Answer"
  ];

  const rows = data.map(feedback => [
    // Basic Info
    feedback.internName,
    feedback.internUniqueId,
    feedback.department,
    feedback.seniorOrManager,
    new Date(feedback.joiningDate).toLocaleDateString(),
    feedback.status,
    new Date(feedback.formSubmissionDate).toLocaleDateString(),

    // Intern Feedback (Question + Answer pairs)
    feedback.Q1_internship.question,
    feedback.Q1_internship.answer,
    feedback.Q2_internship.question,
    feedback.Q2_internship.answer,
    feedback.Q3_internship.question,
    Array.isArray(feedback.Q3_internship.answer) ? feedback.Q3_internship.answer.join('; ') : feedback.Q3_internship.answer,
    feedback.Q4_internship.question,
    feedback.Q4_internship.answer,
    feedback.Q5_internship.question,
    feedback.Q5_internship.answer,
    feedback.Q6_internship.question,
    feedback.Q6_internship.answer,

    // In-charge Feedback (Question + Answer pairs)
    feedback.Q1_incharge.question,
    feedback.Q1_incharge.answer,
    feedback.Q2_incharge.question,
    feedback.Q2_incharge.answer,
    feedback.Q3_incharge.question,
    feedback.Q3_incharge.answer,

    // Social Media (Question + Answer pairs)
    feedback.Q1_social.question,
    feedback.Q1_social.answer,
    feedback.Q2_social.question,
    feedback.Q2_social.answer
  ]);

  const csvContent = [headers, ...rows].map(row =>
    row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')
  ).join('\n');

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `intern_feedback_with_questions_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Alternative: Export with questions in separate sheet (more Excel-friendly)
const exportExcelFormat = (data) => {
  if (data.length === 0) return;

  // Create main data sheet
  const mainHeaders = [
    "Name", "Unique ID", "Department", "Manager/Senior", "Joining Date", "Status", "Submission Date",
    "Tasks & Responsibilities", "Most Meaningful Project", "Skills Learned",
    "Team Experience", "Liked Most", "Suggestions",
    "In-charge Support", "Guidance Frequency", "Message to In-charge",
    "Instagram Follow", "LinkedIn Follow"
  ];

  const mainRows = data.map(feedback => [
    feedback.internName,
    feedback.internUniqueId,
    feedback.department,
    feedback.seniorOrManager,
    new Date(feedback.joiningDate).toLocaleDateString(),
    feedback.status,
    new Date(feedback.formSubmissionDate).toLocaleDateString(),
    feedback.Q1_internship.answer,
    feedback.Q2_internship.answer,
    Array.isArray(feedback.Q3_internship.answer) ? feedback.Q3_internship.answer.join('; ') : feedback.Q3_internship.answer,
    feedback.Q4_internship.answer,
    feedback.Q5_internship.answer,
    feedback.Q6_internship.answer,
    feedback.Q1_incharge.answer,
    feedback.Q2_incharge.answer,
    feedback.Q3_incharge.answer,
    feedback.Q1_social.answer,
    feedback.Q2_social.answer
  ]);

  // Create questions reference sheet
  const questionsHeaders = ["Section", "Question Number", "Full Question"];

  const questionsData = [
    ["Intern Feedback", "Q1", "What tasks or responsibilities did you handle during your internship?"],
    ["Intern Feedback", "Q2", "Which project or activity did you find most meaningful or enjoyable?"],
    ["Intern Feedback", "Q3", "What new skills did you learn or improve during your internship?"],
    ["Intern Feedback", "Q4", "How was your overall experience working with your team and mentor?"],
    ["Intern Feedback", "Q5", "What did you like the most about the internship program?"],
    ["Intern Feedback", "Q6", "Any suggestions to make the internship experience better?"],
    ["In-charge Feedback", "Q1", "How helpful and supportive was your in-charge during your internship?"],
    ["In-charge Feedback", "Q2", "Did your in-charge provide clear guidance and regular feedback?"],
    ["In-charge Feedback", "Q3", "Any message or appreciation you'd like to share with your in-charge?"],
    ["Social Media", "Q1", "Are you following Graphura on Instagram?"],
    ["Social Media", "Q2", "Are you following Graphura on LinkedIn?"]
  ];

  // Combine both sheets with a separator
  const combinedContent = [
    ["MAIN DATA"],
    mainHeaders,
    ...mainRows,
    [""], // Empty row as separator
    ["QUESTIONS REFERENCE"],
    questionsHeaders,
    ...questionsData
  ];

  const csvContent = combinedContent.map(row =>
    row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')
  ).join('\n');

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `intern_feedback_complete_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default function FeedbackDashboard() {
  const [user, setUser] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exportOption, setExportOption] = useState("withQuestions"); // "withQuestions" or "excelFormat"

  useEffect(() => {
    checkAuthAndLoadData();
  }, []);

  const checkAuthAndLoadData = async () => {
    try {
      const authResponse = await fetch('/api/check-auth', {
        method: 'GET',
        credentials: 'include'
      });

      if (!authResponse.ok) {
        throw new Error('Not authenticated');
      }

      const authData = await authResponse.json();
      setUser(authData.user);
      await fetchFeedbacks();
    } catch (error) {
      console.error('Auth check failed:', error);
      window.location.href = '/signup';
    } finally {
      setLoading(false);
    }
  };

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/feedbacks', {
        method: 'GET',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch feedback data');
      }

      const result = await response.json();

      if (result.success && result.data) {
        setFeedbacks(result.data);
      } else if (Array.isArray(result)) {
        setFeedbacks(result);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      alert('Failed to load feedback data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateFeedbackStatus = async (feedbackId, newStatus) => {
    try {
      const response = await fetch(`/api/feedbacks/${feedbackId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      const result = await response.json();

      if (result.success) {
        setFeedbacks(prevFeedbacks =>
          prevFeedbacks.map(feedback =>
            feedback._id === feedbackId
              ? { ...feedback, status: newStatus }
              : feedback
          )
        );

        if (selectedFeedback && selectedFeedback._id === feedbackId) {
          setSelectedFeedback(prev => ({ ...prev, status: newStatus }));
        }

        return result;
      } else {
        throw new Error(result.message || 'Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status: ' + error.message);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/signup';
    }
  };

  const handleViewFeedback = (feedback) => {
    setSelectedFeedback(feedback);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = async (feedbackId, newStatus) => {
    await updateFeedbackStatus(feedbackId, newStatus);
  };

  const handleExport = () => {
    if (exportOption === "withQuestions") {
      exportCSV(filteredFeedbacks);
    } else {
      exportExcelFormat(filteredFeedbacks);
    }
  };

  // Filter feedbacks based on search, department and status
  const filteredFeedbacks = feedbacks.filter(feedback =>
    (search === "" ||
      feedback.internName.toLowerCase().includes(search.toLowerCase()) ||
      feedback.internUniqueId.toLowerCase().includes(search.toLowerCase())) &&
    (filterDept === "" || feedback.department === filterDept) &&
    (filterStatus === "" || feedback.status === filterStatus)
  );

  // Get unique departments and statuses for filter dropdowns
  const departments = [...new Set(feedbacks.map(feedback => feedback.department))].filter(Boolean);
  const statuses = [...new Set(feedbacks.map(feedback => feedback.status))].filter(Boolean);

  // Calculate stats
  const totalFeedback = feedbacks.length;
  const reviewedFeedback = feedbacks.filter(feedback => feedback.status === "Reviewed").length;
  const pendingFeedback = feedbacks.filter(feedback => feedback.status === "Pending").length;
  const feedbackThisMonth = feedbacks.filter(feedback => {
    const submissionDate = new Date(feedback.formSubmissionDate);
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    return submissionDate.getMonth() === currentMonth && submissionDate.getFullYear() === currentYear;
  }).length;

  if (loading) {
    return (
      <div className="bg-[#eceefd] min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-[#5446e0]">Loading Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#eceefd] min-h-screen py-6 flex justify-center items-start">
      <div className="w-full max-w-[1400px] border-4 border-[#ede3ff] rounded-[32px] shadow-[0_10px_64px_0px_rgba(80,60,140,0.08)] bg-white">
        <DashboardNavbar
          userName={user?.fullName || user?.username || "User"}
          onLogout={handleLogout}
        />
        <div className="px-7 pb-8 pt-2 w-full">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 mt-2 items-center">
            <InfoCard
              title="Total Feedback"
              value={totalFeedback}
              gradient="bg-gradient-to-br from-[#a259f7] via-[#6b67ec] to-[#5e7fff]"
              icon={<span role="img" aria-label="chart" className="text-2xl ml-2">📊</span>}
            />
            <InfoCard
              title="Reviewed"
              value={reviewedFeedback}
              gradient="bg-gradient-to-br from-[#00c6ff] to-[#0072ff]"
              icon={<span role="img" aria-label="checked" className="text-2xl ml-2">✅</span>}
            />
            <InfoCard
              title="Pending"
              value={pendingFeedback}
              gradient="bg-gradient-to-br from-[#fc6c8f] to-[#ffb86c]"
              icon={<span role="img" aria-label="pending" className="text-2xl">⏳</span>}
            />
            <InfoCard
              title="This Month"
              value={feedbackThisMonth}
              gradient="bg-gradient-to-br from-[#42e695] to-[#3bb2b8]"
              icon={<span role="img" aria-label="calendar" className="text-2xl">📅</span>}
            />
          </div>
          {/* Export Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Export Format:</span>
              <select
                value={exportOption}
                onChange={e => setExportOption(e.target.value)}
                className="border-2 border-[#e4dbfa] focus:border-[#b884f6] focus:ring-2 focus:ring-violet-200 rounded-2xl px-5 py-3 bg-white shadow"
              >
                <option value="withQuestions">With Questions in Columns</option>
                <option value="excelFormat">Excel Format (Questions in Separate Section)</option>
              </select>
            </div>

            <button
              onClick={handleExport}
              disabled={filteredFeedbacks.length === 0}
              className="bg-gradient-to-r from-[#a259f7] via-[#6b67ec] to-[#5e7fff] hover:from-blue-700 hover:to-purple-500 transition text-white px-12 py-4 text-lg font-bold rounded-2xl shadow-lg flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span role="img" aria-label="export">📋</span> Export {exportOption === "withQuestions" ? "CSV" : "Excel"}
            </button>
          </div>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-7 items-center">
            <input
              placeholder="🔍 Search name or UID..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border-2 border-[#e4dbfa] focus:border-[#b884f6] focus:ring-2 focus:ring-violet-200 rounded-2xl px-6 py-3 w-full sm:w-2/3 bg-white shadow transition"
            />
            <select
              value={filterDept}
              onChange={e => setFilterDept(e.target.value)}
              className="border-2 border-[#e4dbfa] focus:border-[#b884f6] focus:ring-2 focus:ring-violet-200 rounded-2xl px-5 py-3 w-full sm:w-auto bg-white shadow"
            >
              <option value="">📁 All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              className="border-2 border-[#e4dbfa] focus:border-[#b884f6] focus:ring-2 focus:ring-violet-200 rounded-2xl px-5 py-3 w-full sm:w-auto bg-white shadow"
            >
              <option value="">📋 All Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          {/* Feedback Table */}
          <div className="rounded-3xl shadow-xl border-2 border-[#e7eaf4] bg-white mb-8 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-[#f5f7fc] text-[#566078] text-base rounded-t-xl">
                  <th className="py-4 px-5 font-bold">Name</th>
                  <th className="py-4 px-5 font-bold">UID</th>
                  <th className="py-4 px-5 font-bold">Department</th>
                  <th className="py-4 px-5 font-bold">Manager</th>
                  <th className="py-4 px-5 font-bold">Join Date</th>
                  <th className="py-4 px-5 font-bold">Status</th>
                  <th className="py-4 px-5 font-bold">Submission Date</th>
                  <th className="py-4 px-5 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFeedbacks.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="py-8 px-5 text-center text-gray-500">
                      {feedbacks.length === 0 ? "No feedback data available" : "No matching feedback found"}
                    </td>
                  </tr>
                ) : (
                  filteredFeedbacks.map(feedback => (
                    <tr key={feedback._id || feedback.internUniqueId} className="border-b last:border-b-0 hover:bg-gray-50">
                      <td className="py-5 px-5 font-semibold text-[#1a2453]">{feedback.internName}</td>
                      <td className="py-5 px-5">{feedback.internUniqueId}</td>
                      <td className="py-5 px-5 font-medium">{feedback.department}</td>
                      <td className="py-5 px-5">{feedback.seniorOrManager}</td>
                      <td className="py-5 px-5">{new Date(feedback.joiningDate).toLocaleDateString()}</td>
                      <td className="py-5 px-5">
                        <StatusBadge
                          status={feedback.status}
                          onClick={() => handleStatusUpdate(feedback._id, feedback.status === "Pending" ? "Reviewed" : "Pending")}
                          isClickable={true}
                        />
                      </td>
                      <td className="py-5 px-5">{new Date(feedback.formSubmissionDate).toLocaleDateString()}</td>
                      <td className="py-5 px-5">
                        <button
                          onClick={() => handleViewFeedback(feedback)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded-2xl shadow font-semibold flex items-center gap-2 transition"
                        >
                          <span role="img" aria-label="view">👁️</span> View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>


        </div>
      </div>

      {/* Feedback Modal */}
      <FeedbackModal
        feedback={selectedFeedback}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedFeedback(null);
        }}
        onStatusUpdate={handleStatusUpdate}
      />
    </div>
  );
}