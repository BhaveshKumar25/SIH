import React, { useState } from "react";
import "./FeeRecords.css";
import { Eye, Trash2, MoreVertical } from "lucide-react";

const FeeRecords = () => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const records = [
    {
      mis: "ACME2023001",
      name: "Sophia Clark",
      course: "MBA/2023",
      totalFee: "₹10,00,000",
      status: "Partial",
      statusColor: "yellow",
      credited: "₹8,30,000",
      debited: "₹1,70,000",
    },
    {
      mis: "ACME2023002",
      name: "Liam Harris",
      course: "BSc/2023",
      totalFee: "₹8,30,000",
      status: "Paid",
      statusColor: "green",
      credited: "₹8,30,000",
      debited: "₹0",
    },
    {
      mis: "ACME2023003",
      name: "Olivia Turner",
      course: "BA/2023",
      totalFee: "₹6,65,000",
      status: "Partial",
      statusColor: "yellow",
      credited: "₹5,00,000",
      debited: "₹1,65,000",
    },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="material-symbols-outlined logo">school</span>
          <span className="sidebar-title">Acme University</span>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link active">
            <span className="material-symbols-outlined">receipt_long</span>
            Fee Records
          </a>
          <a href="#" className="sidebar-link">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a href="#" className="sidebar-link">
            <span className="material-symbols-outlined">groups</span>
            Students
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1>Fee Records</h1>
          <div className="header-right">
            <button className="notification-btn">
              <span className="material-symbols-outlined">notifications</span>
              <span className="notification-dot"></span>
            </button>
            <div
              className="user-avatar"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByMf9Sn8TEqfmj1s5Af3-M8s9xEAl2GItMRvWC8cRMCepHQX5iMVvghdrGS-yQ2NPKV2lwjtZ7QvFFS3waJ0WPmoEI9CFyJW8whu5UzruEo4dZezueWvoQQvp9QAKQ0tgsRywiEo4zW4H2dKBjT_Vus0L5naS_p9yg8gCRTaKZxQrW4pg95kVM09jTrrXoThZpHARfhFn8qEaQpPxyuTch_2uB_eVx71o4-rPQ4G6p_RGhxkd1M7K4waw9WkrdrS5xiVIsG50OSkQt")',
              }}
            ></div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="stats-cards">
          <div className="card">
            <p>Total Fees Collected</p>
            <p>₹4,50,00,000</p>
          </div>
          <div className="card">
            <p>Credited Amount</p>
            <p>₹5,00,000</p>
          </div>
          <div className="card">
            <p>Debited Amount</p>
            <p>₹1,25,000</p>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <div className="table-header">
            <input type="search" placeholder="Search by student, ID, course..." />
            <button className="filter-btn">
              Filter <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>MIS</th>
                  <th>Student Name</th>
                  <th>Course</th>
                  <th>Total Fee</th>
                  <th>Status</th>
                  <th>Credited Amount</th>
                  <th>Debited Amount</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((rec) => (
                  <tr key={rec.mis}>
                    <td>{rec.mis}</td>
                    <td>{rec.name}</td>
                    <td>{rec.course}</td>
                    <td>{rec.totalFee}</td>
                    <td>
                      <span className={`status-badge ${rec.statusColor}`}>
                        {rec.status}
                      </span>
                    </td>
                    <td>{rec.credited}</td>
                    <td>{rec.debited}</td>
                    <td className="text-right" style={{ position: "relative" }}>
                      <button
                        className="action-btn"
                        onClick={() => toggleMenu(rec.mis)}
                      >
                        <MoreVertical size={20} />
                      </button>

                      {openMenuId === rec.mis && (
                        <div className="action-menu">
                          <button className="menu-item">
                            <Eye size={16} /> View
                          </button>
                          <button className="menu-item">
                            <Trash2 size={16} /> Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <span>Showing 1 to 3 of 10 records</span>
            <div>
              <button className="page-btn">Previous</button>
              <button className="page-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeRecords;






//css code
:root {
  --primary: #137fec;
  --primary-foreground: #ffffff;
  --muted: #f0f2f4;
  --muted-foreground: #617589;
  --border: #dbe0e6;
  --background: #ffffff;
  --foreground: #111418;
  --yellow: #facc15;
  --green: #16a34a;
}

body, html {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: var(--background);
  color: var(--foreground);
}

.dashboard {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  width: 240px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background-color: var(--background);
}
.sidebar-header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 0 16px;
  border-bottom: 1px solid var(--border);
}
.logo {
  width: 24px;
  height: 24px;
}
.sidebar-title {
  font-weight: bold;
  font-size: 16px;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}
.sidebar-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  color: var(--muted-foreground);
  text-decoration: none;
  margin-bottom: 4px;
  font-size: 14px;
}
.sidebar-link:hover {
  background-color: var(--muted);
  color: var(--foreground);
}
.sidebar-link.active {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 16px;
}
.header h1 {
  font-size: 20px;
  font-weight: 700;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.notification-btn {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
}
.notification-btn:hover {
  background-color: var(--muted);
}
.notification-dot {
  position: absolute;
  right: 4px;
  top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary);
}
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}

/* Stats cards */
.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}
.card {
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
}
.card p:first-child {
  font-size: 12px;
  color: var(--muted-foreground);
}
.card p:last-child {
  font-size: 20px;
  font-weight: 600;
}

/* Table */
.table-container {
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
.table-header {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
  gap: 8px;
}
.table-header input {
  flex: 1;
  padding: 6px 12px 6px 36px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
  background-color: var(--background);
}
.table-header input::placeholder {
  color: var(--muted-foreground);
}
.filter-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--muted-foreground);
  cursor: pointer;
}
.filter-btn:hover {
  background-color: var(--muted);
}

/* Table styling */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
th, td {
  padding: 12px 16px;
  text-align: left;
}
thead {
  background-color: #f5f5f5;
  color: var(--muted-foreground);
  font-weight: 500;
}
tbody tr {
  border-bottom: 1px solid var(--border);
}
.status-badge {
  display: inline-block;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  text-align: center;
}
.status-badge.yellow {
  background-color: #fef9c3;
  color: #b45309;
}
.status-badge.green {
  background-color: #dcfce7;
  color: #166534;
}

/* Action button */
.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted-foreground);
  font-size: 18px;
}
.action-btn:hover {
  color: var(--primary);
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--muted-foreground);
}
.page-btn {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background-color: var(--background);
  cursor: pointer;
}
.page-btn:hover {
  background-color: var(--muted);
}
/* Action Menu */
.action-menu {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 4px;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  z-index: 10;
  min-width: 100px;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  font-size: 14px;
  color: var(--foreground);
  background: none;
  border: none;
  cursor: pointer;
}
.menu-item:hover {
  background-color: var(--muted);
}
