import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const RegistrationPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
    secretKey: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/register", form);
      navigate("/signup");
      setSuccess("Registration successful! Please sign in.");
      setForm({
        fullName: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
        role: "",
        secretKey: "",
      });
    } catch (err) {
      console.error("Registration failed:", err);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 p-4">
      <div className="flex flex-col sm:flex-row w-full max-w-5xl h-auto sm:h-[640px] rounded-2xl shadow-2xl overflow-hidden">

        {/* Left Panel */}
        <div className="relative sm:w-1/2 w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 flex flex-col justify-between p-8 sm:p-10 text-white">
          {/* Decorative Circles */}
          <div className="absolute top-10 right-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 blur-sm"></div>
          <div className="absolute bottom-20 left-10 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-60 blur-md"></div>
          <div className="absolute top-32 left-28 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-50 blur-lg"></div>
          <div className="absolute bottom-10 right-10 w-12 sm:w-16 h-12 sm:h-16 bg-pink-400 rounded-full opacity-40"></div>

          {/* Logo */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
            <img
              src="Graphura.jpg"
              alt="Graphura Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full"
            />
          </div>

          {/* Text Section */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center mt-16 sm:mt-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-wide drop-shadow-md">
              Register Portal Access
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mb-2">
              Create your account.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Gain secure access to monitor intern performance, review feedback
              reports, and manage departmental evaluations seamlessly.
            </p>
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="w-full sm:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-12 py-8 sm:py-10 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
              required
            />

            {/* Contact Number */}
            <input
              type="tel"
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
              required
            />

            {/* Role */}
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Role"
              className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
              required
            />

            {/* Secret Key */}
            <input
              type="text"
              name="secretKey"
              value={form.secretKey}
              onChange={handleChange}
              placeholder="Secret Key"
              className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Error & Success */}
            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 mt-4 sm:mt-6 disabled:opacity-50"
            >
              {loading ? "Registering..." : "REGISTER"}
            </button>

            {/* Link */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signup"
                  className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
