import React, { useState } from "react";
import {
  Bed,
  Home,
  Book,
  Settings,
  FileText,
  CreditCard,
  Calendar,
  LogOut,
  Bell,
  User,
} from "lucide-react";

function StudentDetails() {
  const [activeMenu, setActiveMenu] = useState("Students");

  const MENU_ITEMS = [
    { name: "Dashboard", icon: <Home size={18} /> },
    { name: "Students", icon: <User size={18} /> },
    { name: "Hostel", icon: <Bed size={18} /> },
    { name: "Courses", icon: <Book size={18} /> },
    { name: "Finance", icon: <CreditCard size={18} /> },
    { name: "Reports", icon: <FileText size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
    { name: "Calendar", icon: <Calendar size={18} /> },
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Acme Portal</h2>
        <ul className="menu">
          {MENU_ITEMS.map((item) => (
            <li
              key={item.name}
              className={`menu-item ${activeMenu === item.name ? "active" : ""}`}
              onClick={() => setActiveMenu(item.name)}
            >
              {item.icon} <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <ul className="menu bottom">
          <li className="menu-item logout">
            <LogOut size={18} /> <span>Logout</span>
          </li>
        </ul>
      </aside>

      {/* Main Area */}
      <div className="main">
        {/* Navbar */}
        <header className="navbar">
          <h1>🌟 Acme University Portal</h1>
          <div className="nav-right">
            <button className="notification-btn">
              <Bell size={22} />
              <span className="notification-dot"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="content">
          {/* Profile Info */}
          <div className="profile-card">
            <h2 className="student-name">Riya Sharma</h2>
            <p className="student-id">STU202345</p>
          </div>

          {/* Student Profile */}
          <div className="details-card">
            <h3 className="section-title">Student Profile</h3>
            <Detail label="Student Name" value="Riya Sharma" />
            <Detail label="Email" value="riya.sharma@iiitp.ac.in" />
            <Detail label="Contact No." value="+91 98765 43210" />
            <Detail label="Degree" value="B.Tech in Electronics & Communication" />
            <Detail label="Department" value="Electronics & Communication" />
            <Detail label="Admission Year" value="2023" />
          </div>

          {/* Personal Details */}
          <div className="details-card">
            <h3 className="section-title">Personal Details</h3>
            <Detail label="Father's Name" value="Ramesh Sharma" />
            <Detail label="Mother's Name" value="Sunita Sharma" />
            <Detail label="Gender" value="Female" />
            <Detail label="Date of Birth" value="12-05-2005" />
            <Detail label="Category" value="General" />
            <Detail label="Blood Group" value="B+" />
            <Detail label="Community" value="Not Applicable" />
            <Detail label="Nationality" value="Indian" />
            <Detail label="Address" value="12, MG Road, Pune, Maharashtra, 411001" />
            <Detail label="Aadhar Card No" value="XXXX XXXX 1234" />
            <Detail label="Identity Mark" value="Mole on right arm" />
            <Detail label="Admission Date" value="15-07-2023" />
          </div>

          {/* Buttons */}
          <div className="page-actions bottom-buttons">
            <button className="btn-outline">🖨 Print</button>
            <button className="btn-primary">✏️ Edit Details</button>
          </div>
        </main>
      </div>

      {/* CSS */}
      <style jsx>{`
        * { box-sizing: border-box; font-family: "Inter", sans-serif; margin:0; padding:0; }
        .app { display: flex; height: 100vh; background: #f8fbff; color: #1e293b; }

        /* Sidebar */
        .sidebar { width: 230px; background: white; border-right: 1px solid #e0e7ff; display: flex; flex-direction: column; justify-content: space-between; position: fixed; top: 0; bottom: 0; left: 0; }
        .logo { font-size: 18px; font-weight: 700; padding: 16px 20px; color: #2563eb; }
        .menu { list-style: none; padding: 0; margin: 0; }
        .menu-item { display: flex; align-items: center; gap: 10px; padding: 12px 20px; cursor: pointer; color: #475569; border-radius: 8px; margin: 4px 10px; }
        .menu-item:hover { background: #e0f0ff; color: #2563eb; }
        .menu-item.active { background: #3b82f6; color: white; font-weight: 500; }
        .menu.bottom { margin-bottom: 16px; }
        .menu-item.logout { background: #ef4444; color: white; justify-content: center; }

        /* Main */
        .main { flex: 1; margin-left: 230px; display: flex; flex-direction: column; }

        /* Navbar */
        .navbar { display: flex; justify-content: space-between; align-items: center; background: white; padding: 14px 24px; border-bottom: 1px solid #dbeafe; position: sticky; top: 0; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .navbar h1 { font-size: 20px; font-weight: 700; color: #1e3a8a; }
        .nav-right { display: flex; gap: 15px; align-items: center; }

        /* Content */
        .content { flex: 1; padding: 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; }
        .profile-card { background: white; padding: 24px; border-radius: 12px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .student-name { font-size: 22px; font-weight: 600; color: #1e293b; }
        .student-id { font-size: 14px; color: #6b7280; margin-top:4px; }

        .details-card { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .section-title { font-size: 18px; font-weight: 600; margin-bottom: 16px; border-bottom: 1px solid #dbeafe; padding-bottom: 6px; color: #2563eb; }
        .detail-item { display: flex; justify-content: space-between; padding: 6px 0; }
        .detail-label { font-size: 13px; color: #6b7280; }
        .detail-value { font-size: 14px; font-weight: 500; color: #1e293b; }

        /* Buttons */
        .page-actions { display: flex; gap: 10px; }
        .btn-outline { padding: 8px 14px; border-radius: 6px; font-size: 14px; border: 1px solid #dbeafe; background: #fff; cursor: pointer; }
        .btn-outline:hover { background: #e0f0ff; }
        .btn-primary { padding: 8px 14px; border-radius: 6px; font-size: 14px; border: none; background: #2563eb; color: white; cursor: pointer; }
        .btn-primary:hover { background: #1e40af; }
      `}</style>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="detail-item">
      <p className="detail-label">{label}</p>
      <p className="detail-value">{value}</p>
    </div>
  );
}

export default StudentDetails;
