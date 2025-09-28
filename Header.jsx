import React, { useState } from "react";
import { FaSchool, FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi"; 
const Header = ({ onToggleSidebar, title = "Student Profile" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    { id: 1, message: "New student registered", time: "2 min ago" },
    { id: 2, message: "Fee payment received", time: "10 min ago" },
    { id: 3, message: "Exam schedule updated", time: "1 hour ago" },
  ];
  return (
    // <header className="flex items-center justify-between w-full bg-neutral-100 px-4 h-5px border-b border-gray-200 backdrop-blur-sm">'
    
    <header className="abc flex items-center justify-between w-full px-4 h-5px border-b border-gray-200 backdrop-blur-sm">
      <link rel="stylesheet" href="style.css" />
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 rounded hover:bg-blue-200/50"
        >
          <HiMenu className="h-6 w-6 text-gray-800" />
        </button>
        <FaSchool className="h-8 w-8 text-gray-900 flex-shrink-0" />
        <h1 className="text-lg md:text-xl font-bold text-gray-900 truncate">
          College
        </h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative flex-shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 rounded hover:bg-blue-200/50 text-gray-700"
          >
            <IoNotificationsOutline className="h-6 w-6" />
            <span className="absolute right-1 top-1 h-2 w-2 bg-blue-500 rounded-full"></span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white border border-gray-200 rounded shadow-lg z-10">
              <h3 className="font-bold p-2 border-b">Notifications</h3>
              <ul>
                {notifications.map((note) => (
                  <li
                    key={note.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <p className="text-sm">{note.message}</p>
                    <span className="text-xs text-gray-500">{note.time}</span>
                  </li>
                ))}
                {notifications.length === 0 && (
                  <li className="p-2 text-gray-500">No new notifications</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <button className="p-2 rounded hover:bg-blue-200/50 flex-shrink-0">
          <FaUserCircle className="h-8 w-8 text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;