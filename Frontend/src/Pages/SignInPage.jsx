import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Generate random number captcha like “4 + 9”
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptcha({ a, b, answer: a + b });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // ✅ CAPTCHA validation
    if (parseInt(userCaptcha) !== captcha.answer) {
      setError('Incorrect CAPTCHA. Please try again.');
      generateCaptcha();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', {
        email,
        password,
      });
      console.log('API Response:', response.data);
      // Handle success — redirect or show success message
    } catch (err) {
      console.error('API Error:', err);
      setError('Sign in failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 p-4">
      <div className="flex w-full max-w-4xl h-[520px] rounded-2xl shadow-2xl overflow-hidden">

        {/* Left Side — Info Section */}
        <div className="w-1/2 bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 relative flex flex-col justify-between p-10 text-white">
          {/* Animated gradient circles */}
          <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 blur-sm"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-60 blur-md"></div>
          <div className="absolute top-32 left-32 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-50 blur-lg"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-40"></div>

          <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
            <img
              src="Graphura.jpg"
              alt="Graphura Logo"
              className="h-14 w-14 object-contain rounded-full"
            />
          </div>

          {/* Text Section */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 text-center">
            <div>
              <h1 className="text-3xl font-extrabold text-white mb-3 tracking-wide drop-shadow-md">
                SignIn in Portal
              </h1>
              <p className="text-lg text-gray-200 mb-2">
                Welcome back,
              </p>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Sign in to securely access intern feedback reports, performance insights,
                and progress evaluations — all in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side — Form */}
        <div className="w-1/2 bg-white flex flex-col justify-center px-12 py-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Signing In...' : 'CONTINUE'}
            </button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
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
