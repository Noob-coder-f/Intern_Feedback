import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/Graphura_Logo.jpeg";

export default function GraphuraPage() {
  const [feedback, setFeedback] = useState("");
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    alert("✅ Feedback submitted!");
    setFeedback("");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    alert("✅ Signed in successfully!");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("✅ Registered successfully!");
    setRegisterData({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-gray-900 scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Graphura Logo"
              className="w-28 h-auto object-contain"
            />
          </div>

          {/* Navbar Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => scrollTo("signin")}
              className="px-5 py-2 font-semibold border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Sign In
            </button>
            <button
              onClick={() => scrollTo("register")}
              className="px-5 py-2 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen text-white text-center px-6"
      >
        <h1 className="text-5xl font-bold mb-6 mt-20">
          Welcome to Graphura Feedback Portal
        </h1>
        <p className="text-lg max-w-2xl mb-10">
          Share your valuable feedback with us or sign in to access your
          account.
        </p>
        <button
          onClick={() => scrollTo("feedback")}
          className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 shadow-lg transition"
        >
          Give Feedback
        </button>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Give Feedback</h2>
        <form
          onSubmit={handleFeedback}
          className="max-w-lg mx-auto flex flex-col space-y-5 px-6"
        >
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback..."
            required
            rows="5"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </section>

      {/* Sign In Section */}
      <section id="signin" className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Sign In</h2>
        <form
          onSubmit={handleSignIn}
          className="max-w-md mx-auto flex flex-col space-y-5 px-6"
        >
          <input
            type="email"
            placeholder="Email"
            value={signInData.email}
            onChange={(e) =>
              setSignInData({ ...signInData, email: e.target.value })
            }
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={signInData.password}
            onChange={(e) =>
              setSignInData({ ...signInData, password: e.target.value })
            }
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </section>

      {/* Register Section */}
      <section id="register" className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Register</h2>
        <form
          onSubmit={handleRegister}
          className="max-w-md mx-auto flex flex-col space-y-5 px-6"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center text-gray-400 py-6">
        <p>© {new Date().getFullYear()} Graphura. All rights reserved.</p>
      </footer>
    </div>
  );
}
