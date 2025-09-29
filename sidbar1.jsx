import React, { useState } from "react";
import {
  User,
  Home,
  FileText,
  Calendar,
  CreditCard,
  Book,
} from "lucide-react";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("Profile");

  const sections = [
    { name: "Profile", icon: <User size={20} /> },
    { name: "Hostel Occupancy Tracking", icon: <Home size={20} /> },
    { name: "Hostel Form", icon: <FileText size={20} /> },
    { name: "Semester Registration Form", icon: <Calendar size={20} /> },
    { name: "Exam Registration", icon: <Calendar size={20} /> },
    { name: "Library Records", icon: <Book size={20} /> },
    { name: "Fee Payment", icon: <CreditCard size={20} /> },
    { name: "Result", icon: <FileText size={20} /> },
    { name: "Academic Overview", icon: <FileText size={20} /> },
    
  
  ];


  const instituteName = " Institute Name";

  const handleLogout = () => {
    alert("Logged out!");
    // Add actual logout logic here
  };

  return (
    <div style={styles.container}>
      {/* Top Navbar */}
      <div style={styles.topNav}>
        <div>
          <h2 style={{ margin: 0, color: "#003366" }}>Student Dashboard</h2>
          <span style={{ fontSize: "14px", color: "#336699" }}>
            {instituteName}
          </span>
        </div>
        <div style={styles.topNavRight}>
          <span style={styles.icon}>🔔</span>
          <span style={styles.icon}>👤</span>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          {sections.map((section) => (
            <div
              key={section.name}
              style={{
                ...styles.sidebarItem,
                backgroundColor:
                  activeSection === section.name ? "#cce6ff" : "transparent",
              }}
              onClick={() => setActiveSection(section.name)}
            >
              <span style={{ marginRight: "10px" }}>{section.icon}</span>
              {section.name}
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={styles.content}>
          <h3>{activeSection}</h3>
          <p>
            This is the <b>{activeSection}</b> section. Display relevant data
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

// ===== Inline CSS =====
const styles = {
  container: { fontFamily: "Arial, sans-serif" },
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#cce6ff",
    padding: "10px 20px",
    color: "#003366",
    borderBottom: "1px solid #99ccff",
  },
  topNavRight: { display: "flex", gap: "15px", alignItems: "center" },
  icon: { cursor: "pointer", fontSize: "20px" },
  logoutButton: {
    marginLeft: "10px",
    padding: "5px 12px",
    backgroundColor: "#f87171",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
  main: { display: "flex", minHeight: "90vh" },
  sidebar: {
    width: "250px",
    backgroundColor: "#fff",
    borderRight: "1px solid #ddd",
    padding: "10px 0",
  },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    cursor: "pointer",
    transition: "0.3s",
    borderRadius: "5px",
    margin: "3px 10px",
  },
  content: { flex: 1, padding: "20px", backgroundColor: "#f9fbff" },
};

export default StudentDashboard;
