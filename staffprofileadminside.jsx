import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="dashboard-root">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div>
          <div className="sidebar-header">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#137fec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            <h1>Acme ERP</h1>
          </div>
          <div className="sidebar-links">
            <a href="#" className="sidebar-link">Dashboard</a>
            <a href="#" className="sidebar-link active">Staff Records</a>
            <a href="#" className="sidebar-link">Departments</a>
            <a href="#" className="sidebar-link">Roles</a>
            <a href="#" className="sidebar-link">Attendance</a>
            <a href="#" className="sidebar-link">Payroll</a>
            <a href="#" className="sidebar-link">Reports</a>
          </div>
        </div>
        <div className="sidebar-bottom">
          <a href="#" className="sidebar-link">Settings</a>
          <a href="#" className="sidebar-link">Logout</a>
        </div>
      </div>

      {/* Main */}
      <div className="main">
        <header className="header">
          <div className="header-left">
            <button onClick={toggleSidebar}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2>Staff Records</h2>
          </div>
          <div className="header-right">
            <button><span className="material-symbols-outlined">notifications</span></button>
            <div className="profile">
              <div className="profile-img" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFmS5s17tPut5GqelHYZGQT7shvBNF7s6xh_VzAFDZykSSVZNv3-9aGp2oJ9-bDeF7oSyOHdpNBlJbBNtrci0sLl-GYOaCaLcc7wIgr1fmt-FFMz54kdvG0yJHaZEYxsjdMZ7H6iYtnrIA6IaLzn8Wipn814UVf2BRD8cDwUXey05m-vPkBan5LWPnhY7jeCtKG_s2qZJ1G6SVoILOkbpFEPKfja-HsGg9LZxUBngFnPVmtgNdmS-Wr5QnTCFl_SV5zyot8lOYhNTS')"}}></div>
              <div className="profile-info">
                <p className="name">Admin User</p>
                <p className="email">admin@acme.com</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stats-card">
              <p>Total Staff</p>
              <p>250</p>
            </div>
            <div className="stats-card">
              <p>Active</p>
              <p style={{color: "#16a34a"}}>220</p>
            </div>
            <div className="stats-card">
              <p>Inactive</p>
              <p style={{color: "#b91c1c"}}>30</p>
            </div>
          </div>

          {/* Table */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee</th>
                  <th>Contact</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EMP001</td>
                  <td>Sophia Carter</td>
                  <td>555-123-4567</td>
                  <td>Sales</td>
                  <td>Sales Manager</td>
                  <td><span className="status-active">Active</span></td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>EMP005</td>
                  <td>Ava Morgan</td>
                  <td>555-753-9512</td>
                  <td>Finance</td>
                  <td>Financial Analyst</td>
                  <td><span className="status-inactive">Inactive</span></td>
                  <td>...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;










//css code
/* Root */
.dashboard-root {
  display: flex;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background-color: #f9fafb;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.sidebar.closed {
  transform: translateX(-100%);
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 16px;
}

.sidebar-header h1 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1d1d1d;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #555;
  transition: all 0.2s;
}

.sidebar-link:hover {
  background-color: #f1f5f9;
  color: #1a73e8;
}

.sidebar-link.active {
  background-color: #1a73e8;
  color: #fff;
}

/* Sidebar bottom links */
.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

/* Main Content */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 12px 24px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-left button {
  display: none;
}

.header h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Profile */
.profile {
  display: flex;
  align-items: center;
  gap: 8px;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}

.profile-info p {
  margin: 0;
}

.profile-info .name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
}

.profile-info .email {
  font-size: 0.75rem;
  color: #777;
}

/* Stats cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stats-card {
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.stats-card p:first-child {
  color: #555;
  font-size: 0.8rem;
  margin: 0;
}

.stats-card p:last-child {
  color: #222;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 4px 0 0 0;
}

/* Table */
.table-container {
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  overflow-x: auto;
}

.table-container table {
  width: 100%;
  border-collapse: collapse;
}

.table-container th,
.table-container td {
  padding: 12px;
  text-align: left;
  font-size: 0.875rem;
  color: #555;
  border-bottom: 1px solid #eee;
}

.table-container th {
  background-color: #f8fafc;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #777;
}

.status-active {
  background-color: #dcfce7;
  color: #166534;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
}

.status-inactive {
  background-color: #fee2e2;
  color: #991b1b;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 0.8rem;
  color: #555;
}

.pagination .pages {
  display: flex;
  gap: 4px;
}

.pagination button {
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
}

.pagination button.active,
.pagination button:hover {
  background-color: #f1f5f9;
  border-color: #ccc;
}

/* Responsive */
@media screen and (max-width: 1024px) {
  .sidebar {
    position: absolute;
    height: 100%;
    z-index: 1000;
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .header-left button {
    display: block;
  }
}

