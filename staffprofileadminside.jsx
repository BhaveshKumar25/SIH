//App.jsx
import React, { useState } from "react";
import "./App.css";

const App = () => {
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




//App.css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

/* Global Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

/* Root Container - Full Width */
.dashboard-root {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  font-family: 'Inter', sans-serif;
  background-color: #f9fafb;
  position: relative;
}

/* Sidebar - Desktop */
.sidebar {
  width: 280px;
  min-width: 280px;
  max-width: 280px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: sticky;
  top: 0;
  height: 100vh;
  flex-shrink: 0;
  z-index: 100;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
}

.sidebar-header h1 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1d1d1d;
  letter-spacing: -0.025em;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.sidebar-link:hover {
  background-color: #f3f4f6;
  color: #1f2937;
  transform: translateX(2px);
}

.sidebar-link.active {
  background-color: #1a73e8;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(26, 115, 232, 0.2);
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
}

/* Main Content Area */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-button {
  display: none;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.menu-button:hover {
  background-color: #f3f4f6;
  color: #1f2937;
}

.header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  letter-spacing: -0.025em;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.notification-button {
  background: none;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.notification-button:hover {
  background-color: #f3f4f6;
  color: #1f2937;
  border-color: #d1d5db;
}

/* Profile Section */
.profile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.profile:hover {
  background-color: #f9fafb;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  border: 2px solid #e5e7eb;
  flex-shrink: 0;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-info p {
  margin: 0;
}

.profile-info .name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.2;
}

.profile-info .email {
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.2;
}

/* Main Content Padding */
.p-6 {
  padding: 32px;
  flex: 1;
  width: 100%;
  overflow-x: auto;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
  width: 100%;
}

.stats-card {
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  text-align: center;
}

.stats-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.stats-card p:first-child {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stats-card p:last-child {
  color: #1f2937;
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
  line-height: 1;
}

/* Table Container */
.table-container {
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
}

.table-container table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
}

.table-container th,
.table-container td {
  padding: 16px;
  text-align: left;
  font-size: 0.875rem;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
}

.table-container th {
  background-color: #f9fafb;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.table-container td {
  color: #1f2937;
  font-weight: 500;
}

.table-container tbody tr:hover {
  background-color: #f9fafb;
}

.table-container tbody tr:last-child td {
  border-bottom: none;
}

/* Status Badges */
.status-active {
  background-color: #dcfce7;
  color: #166534;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
}

.status-inactive {
  background-color: #fee2e2;
  color: #991b1b;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
}

/* Material Icons */
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 20px;
}

/* Sidebar Overlay for Mobile */
.sidebar-overlay {
  display: none;
}

/* RESPONSIVE DESIGN */

/* Large Desktop (1400px+) */
@media screen and (min-width: 1400px) {
  .p-6 {
    padding: 40px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
  
  .sidebar {
    width: 320px;
    min-width: 320px;
    max-width: 320px;
  }
  
  .header {
    padding: 20px 40px;
  }
}

/* Desktop (1200px - 1399px) */
@media screen and (min-width: 1200px) and (max-width: 1399px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  
  .p-6 {
    padding: 32px;
  }
}

/* Medium Desktop/Laptop (1024px - 1199px) */
@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .sidebar {
    width: 260px;
    min-width: 260px;
    max-width: 260px;
  }
  
  .p-6 {
    padding: 24px;
  }
  
  .header {
    padding: 16px 24px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .stats-card {
    padding: 20px;
  }
  
  .stats-card p:last-child {
    font-size: 1.75rem;
  }
}

/* Tablet Portrait (768px - 1023px) */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .dashboard-root {
    position: relative;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    width: 280px;
    min-width: 280px;
    max-width: 280px;
  }

  .sidebar.open {
    transform: translateX(0);
  }
  
  .sidebar-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .menu-button {
    display: block;
  }
  
  .main {
    width: 100%;
  }
  
  .header {
    padding: 16px 20px;
  }
  
  .p-6 {
    padding: 20px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  
  .stats-card {
    padding: 16px;
  }
  
  .stats-card p:last-child {
    font-size: 1.5rem;
  }
  
  .table-container {
    overflow-x: auto;
  }
  
  .table-container th,
  .table-container td {
    padding: 12px;
    font-size: 0.8rem;
    white-space: nowrap;
  }
}

/* Mobile Landscape (640px - 767px) */
@media screen and (min-width: 640px) and (max-width: 767px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(-100%);
    width: 260px;
    min-width: 260px;
    max-width: 260px;
  }

  .sidebar.open {
    transform: translateX(0);
  }
  
  .sidebar-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .menu-button {
    display: block;
  }
  
  .header {
    padding: 14px 16px;
  }
  
  .header h2 {
    font-size: 1.25rem;
  }
  
  .p-6 {
    padding: 16px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 20px;
  }
  
  .stats-card {
    padding: 14px;
  }
  
  .stats-card p:first-child {
    font-size: 0.8rem;
  }
  
  .stats-card p:last-child {
    font-size: 1.4rem;
  }
  
  .profile-info {
    display: none;
  }
  
  .table-container {
    overflow-x: auto;
  }
  
  .table-container th,
  .table-container td {
    padding: 10px 8px;
    font-size: 0.75rem;
    white-space: nowrap;
  }
}

/* Mobile Portrait (480px - 639px) */
@media screen and (min-width: 480px) and (max-width: 639px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(-100%);
    width: 240px;
    min-width: 240px;
    max-width: 240px;
    padding: 20px 12px;
  }

  .sidebar.open {
    transform: translateX(0);
  }
  
  .sidebar-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
  }

  .menu-button {
    display: block;
  }
  
  .header {
    padding: 12px 12px;
    flex-direction: row;
    align-items: center;
  }
  
  .header h2 {
    font-size: 1.125rem;
  }
  
  .header-right {
    gap: 8px;
  }
  
  .profile-info {
    display: none;
  }
  
  .profile-img {
    width: 32px;
    height: 32px;
  }
  
  .p-6 {
    padding: 12px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 16px;
  }
  
  .stats-card {
    padding: 12px;
  }
  
  .stats-card p:first-child {
    font-size: 0.75rem;
    margin-bottom: 6px;
  }
  
  .stats-card p:last-child {
    font-size: 1.25rem;
  }
  
  .table-container {
    overflow-x: auto;
  }
  
  .table-container th,
  .table-container td {
    padding: 8px 6px;
    font-size: 0.7rem;
    white-space: nowrap;
  }
  
  .status-active,
  .status-inactive {
    padding: 2px 8px;
    font-size: 0.65rem;
  }
}

/* Small Mobile (320px - 479px) */
@media screen and (max-width: 479px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(-100%);
    width: 220px;
    min-width: 220px;
    max-width: 220px;
    padding: 16px 10px;
  }

  .sidebar.open {
    transform: translateX(0);
  }
  
  .sidebar-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
  
  .sidebar-header h1 {
    font-size: 1rem;
  }
  
  .sidebar-link {
    padding: 10px 12px;
    font-size: 0.8rem;
  }

  .menu-button {
    display: block;
  }
  
  .header {
    padding: 10px 8px;
    flex-direction: row;
    align-items: center;
  }
  
  .header h2 {
    font-size: 1rem;
  }
  
  .header-right {
    gap: 6px;
  }
  
  .profile-info {
    display: none;
  }
  
  .profile-img {
    width: 28px;
    height: 28px;
  }
  
  .notification-button {
    padding: 6px;
  }
  
  .p-6 {
    padding: 8px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 12px;
  }
  
  .stats-card {
    padding: 10px;
  }
  
  .stats-card p:first-child {
    font-size: 0.7rem;
    margin-bottom: 4px;
  }
  
  .stats-card p:last-child {
    font-size: 1.1rem;
  }
  
  .table-container {
    overflow-x: auto;
    border-radius: 8px;
  }
  
  .table-container th,
  .table-container td {
    padding: 6px 4px;
    font-size: 0.65rem;
    white-space: nowrap;
  }
  
  .status-active,
  .status-inactive {
    padding: 1px 6px;
    font-size: 0.6rem;
  }
}

/* Prevent body scroll when sidebar is open on mobile */
@media screen and (max-width: 1023px) {
  body.sidebar-open {
    overflow: hidden;
  }
}
export default App;
