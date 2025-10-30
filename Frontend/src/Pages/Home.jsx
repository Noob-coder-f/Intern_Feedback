import { Link } from "react-router-dom";
import React from "react";
import logo from "../../public/GraphuraLogo.png";

export default function GraphuraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 scroll-smooth">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Graphura Logo"
              className="w-32 h-auto object-contain"
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/signup"
              className="px-6 py-2 font-semibold border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎯 For Interns & Developers
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-purple-600">Graphura Internship</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Share your internship experience, provide valuable feedback, and help us 
            create better opportunities for future developers and interns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/feedback"
              className="bg-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit Internship Feedback
            </Link>
            <Link
              to="/terms"
              className="border border-purple-600 text-purple-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Learn About Internship
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Updated for Intern Feedback */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Intern Feedback Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Project Experience
              </h3>
              <p className="text-gray-600">
                Share your project work, technologies used, and real-world development experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 border border-green-100">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mentor Feedback
              </h3>
              <p className="text-gray-600">
                Provide feedback about your mentors, guidance received, and learning support.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 border border-purple-100">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Skill Development
              </h3>
              <p className="text-gray-600">
                Track your growth, new skills acquired, and career development during internship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Program Section */}
      <section id="internship" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Graphura Internship Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our dynamic internship program designed to provide hands-on experience 
              in modern software development and technology stacks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Real-world project experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Mentorship from senior developers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Modern tech stack training</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Career development workshops</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Link
                  to="/feedback"
                  className="block w-full bg-purple-600 text-white text-center py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold"
                >
                  Submit Your Feedback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Share Your Experience?
          </h2>
          <p className="text-xl mb-10 text-purple-100">
            Your feedback helps us improve the internship program for future developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/feedback"
              className="bg-white text-purple-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Submit Feedback Now
            </Link>
            <Link
              to="/terms"
              className="border border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Internship Guide
            </Link>
          </div>
        </div>
      </section>

      {/* About Graphura Internship Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            About Graphura Internship
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Graphura, we believe in nurturing the next generation of tech talent. 
            Our internship program is designed to provide comprehensive learning experiences, 
            hands-on project work, and mentorship that prepares you for a successful career 
            in software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/feedback"
              className="inline-block bg-purple-600 text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300"
            >
              Share Your Internship Feedback
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img
                src={logo}
                alt="Graphura Logo"
                className="w-28 h-auto object-contain"
              />
            </div>
            <div className="flex space-x-6">
              <Link
                to="/signup"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Register
              </Link>
              <Link
                to="/feedback"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Feedback
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Graphura India Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}