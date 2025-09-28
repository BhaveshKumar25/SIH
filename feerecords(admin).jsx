//Dashboard.jsx
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const students = [
    {
      mis: 'ACME2023001',
      name: 'Sophia Clark',
      course: 'MBA/2023',
      totalFee: '₹10,00,000',
      status: 'Partial',
      credited: '₹8,30,000',
      debited: '₹1,70,000'
    },
    {
      mis: 'ACME2023002',
      name: 'Liam Harris',
      course: 'BSc/2023',
      totalFee: '₹8,30,000',
      status: 'Paid',
      credited: '₹8,30,000',
      debited: '₹0'
    },
    {
      mis: 'ACME2023003',
      name: 'Olivia Turner',
      course: 'BA/2023',
      totalFee: '₹6,65,000',
      status: 'Partial',
      credited: '₹5,00,000',
      debited: '₹1,65,000'
    },
    {
      mis: 'ACME2023004',
      name: 'Noah Carter',
      course: 'BEng/2023',
      totalFee: '₹11,65,000',
      status: 'Paid',
      credited: '₹11,65,000',
      debited: '₹0'
    },
    {
      mis: 'ACME2023005',
      name: 'Ava Mitchell',
      course: 'MBA/2023',
      totalFee: '₹5,00,000',
      status: 'Paid',
      credited: '₹5,00,000',
      debited: '₹0'
    },
    {
      mis: 'ACME2023006',
      name: 'Ethan Cooper',
      course: 'BSc/2023',
      totalFee: '₹1,65,000',
      status: 'Paid',
      credited: '₹1,65,000',
      debited: '₹0'
    },
    {
      mis: 'ACME2023007',
      name: 'Isabella Reed',
      course: 'BA/2023',
      totalFee: '₹83,000',
      status: 'Pending',
      credited: '₹0',
      debited: '₹83,000'
    }
  ];

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleNotificationClick = () => {
    alert('Notifications clicked');
  };

  const handleProfileClick = () => {
    alert('Profile clicked');
  };

  const handleFilterClick = () => {
    alert('Filter clicked');
  };

  const handleActionClick = (studentName) => {
    alert(`Actions for ${studentName}`);
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'status-paid';
      case 'partial':
        return 'status-partial';
      case 'pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <svg className="logo-icon" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
            </svg>
            <span className="logo-text">Acme University</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="nav-text">Dashboard</span>
          </a>
          <a href="#" className="nav-item active">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="nav-text">Fee Records</span>
          </a>
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined">groups</span>
            <span className="nav-text">Students</span>
          </a>
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined">paid</span>
            <span className="nav-text">Transactions</span>
          </a>
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined">hourglass_empty</span>
            <span className="nav-text">Pending Dues</span>
          </a>
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="nav-text">Reports</span>
          </a>
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined">settings</span>
            <span className="nav-text">Settings</span>
          </a>
        </nav>
        <div className="sidebar-footer">
          <button className="collapse-btn" onClick={handleSidebarToggle}>
            <span className="material-symbols-outlined">menu_open</span>
            <span className="collapse-text">Collapse</span>
          </button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <div className="header-left">
            <button className="mobile-menu-btn" onClick={handleSidebarToggle}>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <div className="header-right">
            <button className="notification-btn" onClick={handleNotificationClick}>
              <span className="material-symbols-outlined">notifications</span>
              <span className="notification-dot"></span>
            </button>
            <div className="profile-avatar" onClick={handleProfileClick}></div>
          </div>
        </header>

        <main className="content">
          <div className="page-header">
            <h1>Fee Records</h1>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-label">Total Fees Collected</p>
              <p className="stat-value">₹4,50,00,000</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Credited Amount</p>
              <p className="stat-value">₹5,00,000</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Debited Amount</p>
              <p className="stat-value">₹1,25,000</p>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header">
              <div className="search-container">
                <span className="material-symbols-outlined search-icon">search</span>
                <input
                  type="search"
                  placeholder="Search by student, ID, course..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="search-input"
                />
              </div>
              <button className="filter-btn" onClick={handleFilterClick}>
                Filter
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>

            <div className="table-wrapper">
              <table className="records-table">
                <thead>
                  <tr>
                    <th>MIS</th>
                    <th>Student Name</th>
                    <th>Course</th>
                    <th>Total Fee</th>
                    <th>Status</th>
                    <th>Credited Amount</th>
                    <th>Debited Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td className="mis-cell">{student.mis}</td>
                      <td className="name-cell">{student.name}</td>
                      <td className="course-cell">{student.course}</td>
                      <td className="fee-cell">{student.totalFee}</td>
                      <td className="status-cell">
                        <span className={`status-badge ${getStatusClass(student.status)}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="credited-cell">{student.credited}</td>
                      <td className="debited-cell">{student.debited}</td>
                      <td className="action-cell">
                        <button 
                          className="action-btn"
                          onClick={() => handleActionClick(student.name)}
                        >
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-footer">
              <span className="records-info">Showing 1 to 7 of 10 records</span>
              <div className="pagination">
                <button 
                  className="pagination-btn"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                >
                  Previous
                </button>
                <button 
                  className="pagination-btn"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;






//Dashboard.css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

:root {
  --primary: #137fec;
  --primary-foreground: #ffffff;
  --secondary: #f0f2f4;
  --secondary-foreground: #111418;
  --muted: #f0f2f4;
  --muted-foreground: #617589;
  --border: #dbe0e6;
  --background: #ffffff;
  --foreground: #111418;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--background);
  color: var(--foreground);
}

.dashboard-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

/* Sidebar Styles */
.sidebar {
  width: 256px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background-color: var(--background);
  transition: all 0.3s ease-in-out;
}

.sidebar.collapsed {
  width: 64px;
}

.sidebar.collapsed .nav-text,
.sidebar.collapsed .collapse-text,
.sidebar.collapsed .logo-text {
  display: none;
}

.sidebar-header {
  display: flex;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid var(--border);
  padding: 0 24px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-icon {
  height: 24px;
  width: 24px;
  color: var(--primary);
}

.logo-text {
  margin-left: 8px;
  font-size: 18px;
  font-weight: 700;
  color: var(--foreground);
}

.sidebar-nav {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  color: var(--muted-foreground);
  transition: all 0.2s;
  cursor: pointer;
}

.nav-item:hover {
  background-color: var(--muted);
  color: var(--foreground);
}

.nav-item.active {
  background-color: rgba(19, 127, 236, 0.1);
  color: var(--primary);
}

.nav-text {
  font-size: 14px;
  font-weight: 500;
}

.sidebar-footer {
  margin-top: auto;
  padding: 16px;
}

.collapse-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: transparent;
  color: var(--muted-foreground);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.collapse-btn:hover {
  background-color: var(--muted);
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  border-bottom: 1px solid var(--border);
  background-color: var(--background);
  padding: 0 16px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted-foreground);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.notification-btn {
  position: relative;
  padding: 8px;
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted-foreground);
  transition: all 0.2s;
}

.notification-btn:hover {
  background-color: var(--muted);
}

.notification-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: var(--primary);
}

.profile-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuByMf9Sn8TEqfmj1s5Af3-M8s9xEAl2GItMRvWC8cRMCepHQX5iMVvghdrGS-yQ2NPKV2lwjtZ7QvFFS3waJ0WPmoEI9CFyJW8whu5UzruEo4dZezueWvoQQvp9QAKQ0tgsRywiEo4zW4H2dKBjT_Vus0L5naS_p9yg8gCRTaKZxQrW4pg95kVM09jTrrXoThZpHARfhFn8qEaQpPxyuTch_2uB_eVx71o4-rPQ4G6p_RGhxkd1M7K4waw9WkrdrS5xiVIsG50OSkQt");
  background-size: cover;
  background-position: center;
  cursor: pointer;
}

/* Content */
.content {
  flex: 1;
  padding: 16px;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.page-header h1 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.025em;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.stat-card {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background-color: var(--background);
}

.stat-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--muted-foreground);
  margin-bottom: 8px;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: var(--foreground);
}

/* Table Container */
.table-container {
  border: 1px solid var(--border);
  border-radius: 8px;
  background-color: var(--background);
  overflow: hidden;
}

.table-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid var(--border);
}

.search-container {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted-foreground);
  font-size: 20px;
}

.search-input {
  width: 100%;
  padding: 8px 12px 8px 40px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background-color: var(--background);
  font-size: 14px;
  color: var(--foreground);
}

.search-input::placeholder {
  color: var(--muted-foreground);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary);
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: transparent;
  color: var(--muted-foreground);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  background-color: var(--muted);
}

/* Table */
.table-wrapper {
  overflow-x: auto;
}

.records-table {
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
}

.records-table thead {
  background-color: rgba(240, 242, 244, 0.5);
}

.records-table th {
  padding: 16px;
  text-align: left;
  font-weight: 500;
  color: var(--muted-foreground);
  white-space: nowrap;
}

.records-table td {
  padding: 16px;
  border-top: 1px solid var(--border);
}

.mis-cell,
.course-cell,
.fee-cell,
.credited-cell,
.debited-cell {
  color: var(--muted-foreground);
}

.name-cell {
  font-weight: 500;
  color: var(--foreground);
}

.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.status-paid {
  background-color: #dcfce7;
  color: #166534;
}

.status-partial {
  background-color: #fef3c7;
  color: #92400e;
}

.status-pending {
  background-color: #fecaca;
  color: #991b1b;
}

.action-cell {
  text-align: right;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted-foreground);
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
}

.action-btn:hover {
  color: var(--primary);
}

/* Table Footer */
.table-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid var(--border);
}

.records-info {
  font-size: 14px;
  color: var(--muted-foreground);
}

.pagination {
  display: flex;
  gap: 4px;
}

.pagination-btn {
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: transparent;
  color: var(--foreground);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-btn:hover {
  background-color: var(--muted);
}

/* Mobile Responsiveness */
@media (max-width: 1024px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(-100%);
  }

  .sidebar.collapsed {
    transform: translateX(0);
    width: 256px;
  }

  .mobile-menu-btn {
    display: block !important;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .content {
    padding: 12px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .table-header {
    flex-direction: column;
    align-items: stretch;
  }

  .search-container {
    flex: none;
  }

  .table-footer {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .records-table {
    font-size: 12px;
  }

  .records-table th,
  .records-table td {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 0 12px;
  }

  .content {
    padding: 8px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .stat-value {
    font-size: 20px;
  }

  .records-table {
    font-size: 11px;
  }

  .records-table th,
  .records-table td {
    padding: 6px;
  }
}

