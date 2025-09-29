import React, { useState } from "react";

const StaffDashboard = () => {
  const [activeSection, setActiveSection] = useState("Profile");

  const sections = [
    "Profile",
    "Admission Records",
    "Admission Approval",
    "Live Hostel Occupancy",
    "Hostel Application Approval",
    "Fee Details",
    "Semester Registration Referred",
    "Exam Registration",
  ];

  const instituteName = "Institute Name";

  const handleLogout = () => {
    alert("Logged out!");
    // Implement actual logout logic here
  };

  return (
    <div style={styles.container}>
      {/* Top Navbar */}
      <div style={styles.topNav}>
        <div>
          <h2 style={{ margin: 0, color: "#003366" }}>Staff Dashboard</h2>
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
              key={section}
              style={{
                ...styles.sidebarItem,
                backgroundColor:
                  activeSection === section ? "#cce6ff" : "transparent",
              }}
              onClick={() => setActiveSection(section)}
            >
              {section}
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
    backgroundColor: "#cce6ff", // light blue
    padding: "10px 20px",
    color: "#003366", // dark blue text
    borderBottom: "1px solid #99ccff",
  },
  topNavRight: { display: "flex", gap: "15px", alignItems: "center" },
  icon: { cursor: "pointer", fontSize: "20px" },
  logoutButton: {
    marginLeft: "10px",
    padding: "5px 12px",
    backgroundColor: "#f87171", // red
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
  main: { display: "flex", minHeight: "90vh" },
  sidebar: {
    width: "220px",
    backgroundColor: "#fff", // sidebar white
    borderRight: "1px solid #ddd",
    padding: "10px 0",
  },
  sidebarItem: {
    padding: "12px 20px",
    cursor: "pointer",
    transition: "0.3s",
    borderRadius: "5px",
    margin: "3px 10px",
  },
  content: { flex: 1, padding: "20px", backgroundColor: "#f9fbff" }, // very light blue
};

export default StaffDashboard;
