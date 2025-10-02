import React, { useState } from "react";
import {
  FaUser,
  FaFileAlt,
  FaHome,
  FaMoneyBill,
  FaChartBar,
  FaUsers,
  FaSignOutAlt,
  FaBell,
  FaUserCircle,
  FaBars,
  FaUserShield,
  FaCog,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Admission Record Page");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { name: "Profile", icon: <FaUser /> },
    { name: "Admission Record Page", icon: <FaFileAlt /> },
    { name: "Hostel Record", icon: <FaHome /> },
    { name: "Fee Record", icon: <FaMoneyBill /> },
    { name: "Result Record", icon: <FaChartBar /> },
    { name: "Staff Details", icon: <FaUsers /> },
  ];

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="font-sans h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="flex justify-between items-center bg-blue-100 px-4 py-3 border-b border-blue-300 relative z-40">
        <div className="flex items-center gap-3">
          {/* Mobile toggle button */}
          <button
            className="md:hidden text-blue-800"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <FaBars className="text-xl" />
          </button>

          {/* Admin icon + label in navbar */}
          <div className="flex items-center gap-2">
            <FaUserShield className="text-2xl text-blue-800" />
            <h2 className="text-xl font-bold text-blue-900">Admin</h2>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <FaBell className="cursor-pointer text-lg text-blue-700" />
          <FaUserCircle className="cursor-pointer text-lg text-blue-700" />
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden relative z-0">
        {/* Sidebar */}
        <aside
          className={`
            bg-blue-600 text-white md:w-64 w-64 fixed md:relative z-40
            top-0 left-0 h-full flex flex-col justify-between
            transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          {/* Menu items (scrollable if needed) */}
          <div className="flex-1 mt-4 overflow-y-auto px-2">
            {sections.map((section) => (
              <div
                key={section.name}
                className={`px-5 py-3 rounded cursor-pointer mx-2 my-1 flex items-center gap-3 transition ${
                  activeSection === section.name ? "bg-blue-500 font-semibold" : "hover:bg-blue-400"
                }`}
                onClick={() => {
                  setActiveSection(section.name);
                  setSidebarOpen(false);
                }}
              >
                {section.icon}
                <span>{section.name}</span>
              </div>
            ))}
          </div>

          {/* Bottom part: Settings above Logout */}
          <div className="px-2 pb-4">
            <div
              className="px-5 py-3 rounded cursor-pointer mx-2 flex items-center gap-3 hover:bg-blue-400"
              onClick={() => {
                setActiveSection("Settings");
                setSidebarOpen(false);
              }}
            >
              <FaCog /> <span>Settings</span>
            </div>

            <div
              className="px-5 py-3 rounded cursor-pointer mx-2 mt-0 flex items-center gap-3 hover:bg-blue-400"
              onClick={handleLogout}
            >
              <FaSignOutAlt /> <span>Logout</span>
            </div>
          </div>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-blue-50 overflow-auto md:ml-64 ml-0">
          <h3 className="text-lg font-bold mb-2">{activeSection}</h3>
          <p>
            Display <b>{activeSection}</b> data and actions here.
          </p>

          {/* Example Table */}
          {activeSection === "Admission Record Page" && (
            <table className="w-full border border-gray-300 mt-4 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Student ID</th>
                  <th className="border px-3 py-2">Name</th>
                  <th className="border px-3 py-2">Course</th>
                  <th className="border px-3 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">STD101</td>
                  <td className="border px-3 py-2">Amit Kumar</td>
                  <td className="border px-3 py-2">B.Tech</td>
                  <td className="border px-3 py-2">Approved</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">STD102</td>
                  <td className="border px-3 py-2">Sara Khan</td>
                  <td className="border px-3 py-2">B.Sc</td>
                  <td className="border px-3 py-2">Pending</td>
                </tr>
              </tbody>
            </table>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
