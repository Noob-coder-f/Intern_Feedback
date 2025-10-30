import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage.jsx";
import SignInPage from "./Pages/SignInPage.jsx";
import GraphuraPage from "./Pages/Home.jsx";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<GraphuraPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signup" element={<SignInPage />} />

        <Route
          path="*"
          element={
            <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-purple-200 p-6 text-center">
              <h1 className="text-red-600 font-extrabold text-[8vw] md:text-[6rem]">404</h1>
              <h2 className="text-gray-800 font-semibold text-2xl md:text-4xl mt-2">Page Not Found</h2>
              <p className="text-gray-600 text-sm md:text-lg mt-2 max-w-md">
                The page you are looking for does not exist. Go back to the homepage.
              </p>
              <a
                href="/"
                className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Go Home
              </a>
            </div>
          }
        />
      </Routes>

    </Router>
  );
}
export default App;
// import React, { useState } from 'react';
// import SignInPage from './Pages/SignInPage';
// import RegistrationPage from './Pages/RegisterPage';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('signin'); // 'signin' or 'register'

//   return (
//     <div>
//       {currentPage === 'signin' ? (
//         <SignInPage onCreateAccount={() => setCurrentPage('register')} />
//       ) : (
//         <RegistrationPage onBackToSignIn={() => setCurrentPage('signin')} />
//       )}
//     </div>
//   );
// };

// export default App;
