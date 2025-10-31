
// import React, { useState } from "react";


// // Navbar (unchanged, but logout is now a prop handler)
// const DashboardNavbar = ({ userName, onLogout }) => (
//   <nav className="flex items-center justify-between px-8 py-5 bg-white rounded-t-3xl border-b shadow-sm">
//     <h2 className="text-2xl font-bold text-[#5446e0]">Intern Feedback Dashboard</h2>
//     <div className="flex items-center gap-4">
//       <span className="bg-blue-50 px-4 py-2 rounded-xl text-blue-700 font-bold flex items-center shadow">
//         <span role="img" aria-label="wave" className="mr-2">👋</span>
//         {userName}
//       </span>
//       <button
//         className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-xl shadow-lg focus:outline-none transition"
//         onClick={onLogout}
//       >
//         <span className="mr-1 text-lg">⎋</span> Logout
//       </button>
//     </div>
//   </nav>
// );


// const InfoCard = ({ title, value, gradient, icon }) => (
//   <div className={`flex flex-col justify-between rounded-2xl shadow-lg p-6 w-full min-h-[120px] ${gradient}`}>
//     <div className="flex items-center justify-between">
//       <span className="font-bold text-white uppercase">{title}</span>
//       {icon}
//     </div>
//     <div className="flex items-end mt-5">
//       <span className="text-3xl font-extrabold text-white">{value}</span>
//     </div>
//   </div>
// );


// const sampleInterns = [
//   { id: 1, name: "Anne N.", uniqueId: "INT001", department: "Frontend", manager: "Alex S.", joiningDate: "2024-10-01", status: "Reviewed", feedbackGiven: true, feedback: "Great collaboration and creativity!", rating: 5, history: ["Initial review completed", "Feedback responded"], notes: "" },
//   { id: 2, name: "David C.", uniqueId: "INT002", department: "Backend", manager: "James R.", joiningDate: "2024-10-03", status: "Reviewed", feedbackGiven: true, feedback: "Delivered quality code on schedule", rating: 4, history: ["Pending manager review"], notes: "" },
//   { id: 3, name: "Marie D.", uniqueId: "INT003", department: "Data Analytics", manager: "Alex S.", joiningDate: "2024-09-27", status: "Reviewed", feedbackGiven: true, feedback: "Strong with analytics and reporting.", rating: 4, history: [], notes: "" }
// ];


// const exportCSV = (data) => {
//   const headers = [
//     "Name", "Unique ID", "Department", "Manager",
//     "Joining Date", "Status", "Feedback", "Rating"
//   ];
//   const rows = data.map(i => [
//     i.name, i.uniqueId, i.department, i.manager,
//     i.joiningDate, i.status, i.feedback, i.rating,
//   ]);
//   const csvContent = [headers, ...rows].map(r => r.join(",")).join("\n");
//   const blob = new Blob([csvContent], { type: "text/csv" });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = "intern_feedback.csv";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   URL.revokeObjectURL(url);
// };


// export default function Dashboard() {
//   const userName = "Prajwal";
//   const [interns, setInterns] = useState(sampleInterns);
//   const [search, setSearch] = useState("");
//   const [filterDept, setFilterDept] = useState("");
//   const [filterRating, setFilterRating] = useState("");


//   const filteredInterns = interns.filter(i =>
//     (search === "" ||
//       i.name.toLowerCase().includes(search.toLowerCase()) ||
//       i.uniqueId.toLowerCase().includes(search.toLowerCase())) &&
//     (filterDept === "" || i.department === filterDept) &&
//     (filterRating === "" || i.rating === Number(filterRating))
//   );


//   const totalFeedback = interns.filter(i => i.feedbackGiven).length;
//   const averageRating = (interns.reduce((sum, i) => sum + i.rating, 0) / (totalFeedback || 1));
//   const positiveCount = interns.filter(i => i.rating >= 4).length;
//   const neutralCount = interns.filter(i => i.rating === 3).length;
//   const negativeCount = interns.filter(i => i.rating <= 2 && i.rating > 0).length;
//   const feedbackThisMonth = 0;


//   // Logout API: update this function with your API route
//   const handleLogout = async () => {
//     try {
//       await fetch('/api/logout', { method: 'POST', credentials: 'include' });
//       window.location.reload();
//     } catch (err) {
//       alert("Logout failed");
//     }
//   };


//   return (
//     <div className="bg-[#eceefd] min-h-screen py-6 flex justify-center items-start">
//       <div className="w-full max-w-[1400px] border-4 border-[#ede3ff] rounded-[32px] shadow-[0_10px_64px_0px_rgba(80,60,140,0.08)] bg-white">
//         <DashboardNavbar userName={userName} onLogout={handleLogout} />
//         <div className="px-7 pb-8 pt-2 w-full">
//           {/* 3-cards and logo: 4 columns at large, stacking on mobile */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mb-10 mt-2 items-center">
//             <InfoCard
//               title="Total Feedback"
//               value={totalFeedback}
//               gradient="bg-gradient-to-br from-[#a259f7] via-[#6b67ec] to-[#5e7fff]"
//               icon={<span role="img" aria-label="chart" className="text-2xl ml-2">📊</span>}
//             />
//             {/* Center logo - responsive */}
//             <div className="flex items-center justify-center">
//               <img
//                 src="/GraphuraLogo.png"
//                 alt="Graphura Logo"
//                 className="h-20 md:h-24 object-contain mx-auto"
//                 style={{ maxWidth: 200 }}
//               />
//             </div>
//             <InfoCard
//               title="This Month"
//               value={feedbackThisMonth}
//               gradient="bg-gradient-to-br from-[#fc6c8f]  to-[#ffb86c]"
//               icon={<span role="img" aria-label="calendar" className="text-2xl">📅</span>}
//             />
//           </div>
//           {/* Filters */}
//           <div className="flex flex-col sm:flex-row gap-4 mb-7 items-center">
//             <input
//               placeholder="🔍 Search name or UID..."
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//               className="border-2 border-[#e4dbfa] focus:border-[#b884f6] focus:ring-2 focus:ring-violet-200 rounded-2xl px-6 py-3 w-full sm:w-2/3 bg-white shadow transition"
//             />
//             <select
//               value={filterDept}
//               onChange={e => setFilterDept(e.target.value)}
//               className="border-2 border-[#e4dbfa] focus:border-[#b884f6] focus:ring-2 focus:ring-violet-200 rounded-2xl px-5 py-3 w-full sm:w-auto bg-white shadow"
//             >
//               <option value="">📁 All Departments</option>
//               <option value="Frontend">Frontend</option>
//               <option value="Backend">Backend</option>
//               <option value="Data Analytics">Data Analytics</option>
//             </select>
//             <select
//               value={filterRating}
//               onChange={e => setFilterRating(e.target.value)}
//               className="border-2 border-[#c6f3d5] focus:border-[#4ecc7f] focus:ring-2 focus:ring-green-100 rounded-2xl px-6 py-3 w-full sm:w-auto bg-white shadow"
//             >
//               <option value="">⭐ All Ratings</option>
//               {[5, 4, 3, 2, 1].map(r => (
//                 <option key={r} value={r}>{r} star</option>
//               ))}
//             </select>
//           </div>
//           {/* Table */}
//           <div className="rounded-3xl shadow-xl border-2 border-[#e7eaf4] bg-white mb-8 overflow-x-auto">
//             <table className="min-w-full text-left">
//               <thead>
//                 <tr className="bg-[#f5f7fc] text-[#566078] text-base rounded-t-xl">
//                   <th className="py-4 px-5 font-bold">Name</th>
//                   <th className="py-4 px-5 font-bold">UID</th>
//                   <th className="py-4 px-5 font-bold">Department</th>
//                   <th className="py-4 px-5 font-bold">Manager</th>
//                   <th className="py-4 px-5 font-bold">Join Date</th>
//                   <th className="py-4 px-5 font-bold">Status</th>
//                   <th className="py-4 px-5 font-bold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredInterns.map(intern => (
//                   <tr key={intern.id} className="border-b last:border-b-0">
//                     <td className="py-5 px-5 font-semibold text-[#1a2453]">{intern.name}</td>
//                     <td className="py-5 px-5">{intern.uniqueId}</td>
//                     <td className="py-5 px-5 font-medium">{intern.department}</td>
//                     <td className="py-5 px-5">{intern.manager}</td>
//                     <td className="py-5 px-5">{intern.joiningDate}</td>
//                     <td className="py-5 px-5">
//                       <span className="bg-green-400 text-white px-4 py-1 rounded-2xl font-bold text-sm shadow-md">REVIEWED</span>
//                     </td>
//                     <td className="py-5 px-5">
//                       <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded-2xl shadow font-semibold flex items-center gap-2">
//                         <span role="img" aria-label="view">👁️</span> View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {/* Export Button */}
//           <div className="flex justify-end mt-8">
//             <button
//               onClick={() => exportCSV(filteredInterns)}
//               className="bg-gradient-to-r from-[#a259f7] via-[#6b67ec] to-[#5e7fff] hover:from-blue-700 hover:to-purple-500 transition text-white px-12 py-4 text-lg font-bold rounded-2xl shadow-lg flex items-center gap-3"
//             >
//               <span role="img" aria-label="export">📋</span> Export CSV
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 
import React, { useState } from "react";

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

const sampleInterns = [
  { id: 1, name: "Anne N.", uniqueId: "INT001", department: "Frontend", manager: "Alex S.", joiningDate: "2024-10-01", status: "Reviewed", feedbackGiven: true, feedback: "Great collaboration and creativity!", rating: 5, history: ["Initial review completed", "Feedback responded"], notes: "" },
  { id: 2, name: "David C.", uniqueId: "INT002", department: "Backend", manager: "James R.", joiningDate: "2024-10-03", status: "Reviewed", feedbackGiven: true, feedback: "Delivered quality code on schedule", rating: 4, history: ["Pending manager review"], notes: "" },
  { id: 3, name: "Marie D.", uniqueId: "INT003", department: "Data Analytics", manager: "Alex S.", joiningDate: "2024-09-27", status: "Reviewed", feedbackGiven: true, feedback: "Strong with analytics and reporting.", rating: 4, history: [], notes: "" }
];

const exportCSV = (data) => {
  const headers = [
    "Name", "Unique ID", "Department", "Manager",
    "Joining Date", "Status", "Feedback", "Rating"
  ];
  const rows = data.map(i => [
    i.name, i.uniqueId, i.department, i.manager,
    i.joiningDate, i.status, i.feedback, i.rating,
  ]);
  const csvContent = [headers, ...rows].map(r => r.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "intern_feedback.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default function Dashboard() {
  const userName = "Prajwal";
  const [interns, setInterns] = useState(sampleInterns);
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");

  // Only search and department filter applied here
  const filteredInterns = interns.filter(i =>
    (search === "" ||
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.uniqueId.toLowerCase().includes(search.toLowerCase())) &&
    (filterDept === "" || i.department === filterDept)
  );

  const totalFeedback = interns.filter(i => i.feedbackGiven).length;
  const averageRating = (interns.reduce((sum, i) => sum + i.rating, 0) / (totalFeedback || 1));
  const feedbackThisMonth = 0;

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST', credentials: 'include' });
      window.location.reload();
    } catch (err) {
      alert("Logout failed");
    }
  };

  return (
    <div className="bg-[#eceefd] min-h-screen py-6 flex justify-center items-start">
      <div className="w-full max-w-[1400px] border-4 border-[#ede3ff] rounded-[32px] shadow-[0_10px_64px_0px_rgba(80,60,140,0.08)] bg-white">
        <DashboardNavbar userName={userName} onLogout={handleLogout} />
        <div className="px-7 pb-8 pt-2 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mb-10 mt-2 items-center">
            <InfoCard
              title="Total Feedback"
              value={totalFeedback}
              gradient="bg-gradient-to-br from-[#a259f7] via-[#6b67ec] to-[#5e7fff]"
              icon={<span role="img" aria-label="chart" className="text-2xl ml-2">📊</span>}
            />
            <div className="flex items-center justify-center">
              <img
                src="/GraphuraLogo.png"
                alt="Graphura Logo"
                className="h-20 md:h-24 object-contain mx-auto"
                style={{ maxWidth: 200 }}
              />
            </div>
            <InfoCard
              title="This Month"
              value={feedbackThisMonth}
              gradient="bg-gradient-to-br from-[#fc6c8f]  to-[#ffb86c]"
              icon={<span role="img" aria-label="calendar" className="text-2xl">📅</span>}
            />
          </div>
          {/* Filters: Only Search and Department */}
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
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>
          </div>
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
                  <th className="py-4 px-5 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInterns.map(intern => (
                  <tr key={intern.id} className="border-b last:border-b-0">
                    <td className="py-5 px-5 font-semibold text-[#1a2453]">{intern.name}</td>
                    <td className="py-5 px-5">{intern.uniqueId}</td>
                    <td className="py-5 px-5 font-medium">{intern.department}</td>
                    <td className="py-5 px-5">{intern.manager}</td>
                    <td className="py-5 px-5">{intern.joiningDate}</td>
                    <td className="py-5 px-5">
                      <span className="bg-green-400 text-white px-4 py-1 rounded-2xl font-bold text-sm shadow-md">REVIEWED</span>
                    </td>
                    <td className="py-5 px-5">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded-2xl shadow font-semibold flex items-center gap-2">
                        <span role="img" aria-label="view">👁️</span> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Export Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={() => exportCSV(filteredInterns)}
              className="bg-gradient-to-r from-[#a259f7] via-[#6b67ec] to-[#5e7fff] hover:from-blue-700 hover:to-purple-500 transition text-white px-12 py-4 text-lg font-bold rounded-2xl shadow-lg flex items-center gap-3"
            >
              <span role="img" aria-label="export">📋</span> Export CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
