import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [userCaptcha, setUserCaptcha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate captcha
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptcha({ a, b });
    setUserCaptcha("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userCaptcha) !== captcha.a + captcha.b) {
      setError("❌ Incorrect CAPTCHA answer. Try again.");
      generateCaptcha();
      return;
    }
    setError("");
    setLoading(true);
    // Simulate login API
    setTimeout(() => {
      setLoading(false);
      alert("Login successful!");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 p-4">
      <div className="flex flex-col sm:flex-row w-full max-w-5xl h-auto sm:h-[520px] rounded-2xl shadow-2xl overflow-hidden">

        {/* Left Side — Info Section */}
        <div className="relative sm:w-1/2 w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 flex flex-col justify-between p-8 sm:p-10 text-white">
          {/* Animated gradient circles */}
          <div className="absolute top-10 right-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 blur-sm"></div>
          <div className="absolute bottom-20 left-10 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-60 blur-md"></div>
          <div className="absolute top-32 left-24 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-50 blur-lg"></div>
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
              Sign In to Portal
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mb-2">
              Welcome back,
            </p>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Access your feedback reports, performance insights, and progress
              — all in one secure place.
            </p>
          </div>
        </div>

        {/* Right Side — Form */}
        <div className="w-full sm:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-12 py-8 sm:py-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            {/* CAPTCHA */}
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-semibold">
                {captcha.a} + {captcha.b} =
              </span>
              <input
                type="number"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                placeholder="Your Answer"
                className="flex-1 pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
              <button
                type="button"
                onClick={generateCaptcha}
                className="text-sm text-purple-600 hover:text-purple-800 font-semibold transition"
              >
                ↻
              </button>
            </div>

            {/* Error */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50"
            >
              {loading ? "Signing In..." : "CONTINUE"}
            </button>

            {/* Register link */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
