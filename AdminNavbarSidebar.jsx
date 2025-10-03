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
  FaSchool,
} from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom"; 

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { name: "Profile", path: "/profile", icon: <FaUser /> },
    { name: "Admission Record Page", path: "/admissions", icon: <FaFileAlt /> },
    { name: "Hostel Record", path: "/hostel", icon: <FaHome /> },
    { name: "Fee Record", path: "/fees", icon: <FaMoneyBill /> },
    { name: "Result Record", path: "/results", icon: <FaChartBar /> },
    { name: "Staff Details", path: "/staff", icon: <FaUsers /> },
  ];

  const bottomItems = [
    { name: "Settings", path: "/settings", icon: <FaCog /> },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  const handleItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setSidebarOpen(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="w-full bg-blue-200 shadow-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            className="md:hidden text-gray-600 hover:text-blue-500"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>
          <FaSchool className="h-6 w-6 text-black-600" />
          <h2 className="text-lg font-bold text-gray-800">Admin</h2>
        </div>

        <div className="flex items-center gap-4">
          <IoNotificationsOutline className="h-6 w-6 cursor-pointer text-gray-600 hover:text-blue-500" />
          <FaUserCircle className="h-7 w-7 cursor-pointer text-gray-600 hover:text-blue-500" />
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`
            w-56 bg-blue-600 text-white flex flex-col justify-between py-3
            absolute md:relative h-full z-20 transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          <div className="overflow-y-auto flex-1">
            <ul>
              {sections.map((item) => (
                <li
                  key={item.name}
                  className={`px-6 py-3 mb-1 cursor-pointer flex items-center gap-3 rounded transition ${
                    location.pathname === item.path
                      ? "bg-blue-500 font-semibold"
                      : "hover:bg-blue-400"
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item.icon}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <ul className="px-6">
            {bottomItems.map((item) => (
              <li
                key={item.name}
                className="py-3 cursor-pointer flex items-center gap-3 rounded hover:bg-blue-400"
                onClick={() => handleItemClick(item)}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default AdminDashboard;
