
import React, { useState } from 'react';

const RegistrationPage = ({ onBackToSignIn }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
    role: '',
    secretKey: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Registration submitted', form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 p-4">
      <div className="flex w-full max-w-4xl min-h-[600px] rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Left Panel - Purple Gradient with Circles */}
        <div className="w-1/2 bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 relative flex flex-col justify-between p-10 text-white">
          {/* Decorative circles */}
          <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 blur-sm"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-60 blur-md"></div>
          <div className="absolute top-32 left-32 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-50 blur-lg"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-40"></div>
          
          {/* Logo Section in Top-Left Corner */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
            {/* Circular Graphura Logo */}
            <img 
              src="Graphura.jpg" 
              alt="Graphura Logo" 
              className="h-14 w-14 object-contain rounded-full"
            />
            {/* Text Graphura Logo */}
            <img 
              src="GraphuraLogo.jpg" 
              alt="Graphura Text" 
              className="h-14 object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center">
            {/* Welcome Text */}
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Register Now</h1>
              <p className="text-sm opacity-90">Create your account<br />to get started</p>
            </div>
          </div>
          
          {/* Footer Link */}
          <div className="relative z-10">
            <p className="text-xs opacity-75">www.graphura.com</p>
          </div>
        </div>

        {/* Right Panel - Registration Form */}
        <div className="w-1/2 bg-white flex flex-col justify-center px-12 py-10 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <input
                type="tel"
                name="contactNumber"
                value={form.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
            </div>
             {/* Role */}
            <div>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Role"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            {/* Secret Key */}
            <div>
              <input
                type="text"
                name="secretKey"
                value={form.secretKey}
                onChange={handleChange}
                placeholder="Secret Key"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
            </div>

           

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 mt-6"
            >
              REGISTER
            </button>

            {/* Back to Sign In Link */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={onBackToSignIn}
                  className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
