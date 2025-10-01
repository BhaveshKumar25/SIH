import React, { useState } from "react";
import {
  FaUser,
  FaFileAlt,
  FaHome,
  FaMoneyBill,
  FaChartBar,
  FaUsers,
  FaBell,
  FaUserCircle,
  FaBars,
  FaUserShield,
} from "react-icons/fa";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { name: "Profile", icon: <FaUser /> },
    { name: "Admission Records", icon: <FaFileAlt /> },
    { name: "Admission Approval", icon: <FaFileAlt /> },
    { name: "Live Hostel Occupancy", icon: <FaHome /> },
    { name: "Hostel Application Approval", icon: <FaHome /> },
    { name: "Fee Details", icon: <FaMoneyBill /> },
    { name: "Semester Registration Referred", icon: <FaFileAlt /> },
    { name: "Exam Registration", icon: <FaChartBar /> },
  ];

  const instituteName = "Institute Name";

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="font-sans h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="flex justify-between items-center bg-blue-100 px-4 py-3 border-b border-blue-300 z-30 relative">
        <div className="flex items-center gap-3">
          {/* Mobile toggle button */}
          <button
            className="md:hidden text-blue-800"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars className="text-xl" />
          </button>
          <div className="flex items-center gap-2">
            <FaUserShield className="text-2xl text-blue-800" />
            <h2 className="text-xl font-bold text-blue-900">Staff</h2>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <FaBell className="cursor-pointer text-lg text-blue-700" />
          <FaUserCircle className="cursor-pointer text-lg text-blue-700" />
          <button
            className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded flex items-center gap-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden relative z-0">
        {/* Sidebar */}
        <div
          className={`
            bg-white text-blue-900 md:w-64 w-64 fixed md:relative z-30
            top-0 left-0 h-screen
            transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            shadow-md
          `}
        >
          <div className="mt-16 md:mt-4">
            {sections.map((section) => (
              <div
                key={section.name}
                className={`px-5 py-3 rounded cursor-pointer mx-2 my-1 flex items-center gap-3 transition ${
                  activeSection === section.name
                    ? "bg-blue-100 font-semibold"
                    : "hover:bg-blue-50"
                }`}
                onClick={() => {
                  setActiveSection(section.name);
                  setSidebarOpen(false); // Close sidebar on mobile after click
                }}
              >
                {section.icon}
                {section.name}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 bg-blue-50 md:ml-0 ml-0 overflow-auto">
          <h3 className="text-lg font-bold mb-2">{activeSection}</h3>
          <p>
            This is the <b>{activeSection}</b> section. Display relevant data
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
