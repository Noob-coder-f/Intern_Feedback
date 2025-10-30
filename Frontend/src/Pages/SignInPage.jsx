
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';  // Import axios

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Optional: You may want to add state for loading and error messages
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('YOUR API', {
        email,
        password,
      });
      console.log('API Response:', response.data);
      // Handle success - redirect user, show success message etc.
    } catch (err) {
      console.error('API Error:', err);
      setError('Sign in failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 p-4">
      <div className="flex w-full max-w-4xl h-[500px] rounded-2xl shadow-2xl overflow-hidden">

        <div className="w-1/2 bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 relative flex flex-col justify-between p-10 text-white">
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
            <img 
              src="GraphuraLogo.jpg" 
              alt="Graphura Text" 
              className="h-14 object-contain"
            />
          </div>

          <div className="relative z-10 flex-1 flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Welcome </h1>
              <p className="text-sm opacity-90">Sign in to<br />continue access</p>
            </div>
          </div>
        </div>

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
