import React, { useState } from "react";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Admission Record Page");

  const sections = [
    "profile",
    "Admission Record Page",
    "Hostel Record",
    "Fee Record",
    "Result Record",
    "Staff Details",
    
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
          <h2 style={{ margin: 0, color: "#003366" }}>Admin Dashboard</h2>
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
            Display <b>{activeSection}</b> data and actions here.
          </p>

          {/* Example: Table for Admission Record */}
          {activeSection === "Admission Record Page" && (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>STD101</td>
                  <td>Amit Kumar</td>
                  <td>B.Tech</td>
                  <td>Approved</td>
                </tr>
                <tr>
                  <td>STD102</td>
                  <td>Sara Khan</td>
                  <td>B.Sc</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          )}
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
    padding: "12px 20px",
    cursor: "pointer",
    transition: "0.3s",
    borderRadius: "5px",
    margin: "3px 10px",
  },
  content: { flex: 1, padding: "20px", backgroundColor: "#f9fbff" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },
  "table th, table td": {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
};

export default AdminDashboard;
