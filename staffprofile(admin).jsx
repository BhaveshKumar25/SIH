//App.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import StaffTable from './StaffTable.jsx';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="main-content">
          <Header onMenuClick={toggleSidebar} />
          <main className="main">
            <div className="page-header">
              <div>
                <h3 className="page-title">Staff Records</h3>
                <p className="page-description">Manage all staff members in your organization.</p>
              </div>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-label">Total Staff</p>
                <p className="stat-value">250</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Active</p>
                <p className="stat-value active">220</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Inactive</p>
                <p className="stat-value inactive">30</p>
              </div>
            </div>

            <StaffTable />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;






//sidebar
import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: 'dashboard', label: 'Dashboard', active: false },
    { icon: 'group', label: 'Staff Records', active: true },
    { icon: 'corporate_fare', label: 'Departments', active: false },
    { icon: 'badge', label: 'Roles', active: false },
    { icon: 'calendar_today', label: 'Attendance', active: false },
    { icon: 'payments', label: 'Payroll', active: false },
    { icon: 'bar_chart', label: 'Reports', active: false },
  ];

  const bottomMenuItems = [
    { icon: 'settings', label: 'Settings' },
    { icon: 'logout', label: 'Logout' },
  ];

  const handleItemClick = (label) => {
    console.log(`Clicked on ${label}`);
    // Add navigation logic here
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="logo">
              <svg className="logo-icon" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h1 className="logo-text">Acme ERP</h1>
          </div>
          
          <nav className="nav-menu">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
                onClick={() => handleItemClick(item.label)}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <p className="nav-label">{item.label}</p>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="sidebar-bottom">
          {bottomMenuItems.map((item, index) => (
            <button
              key={index}
              className="nav-item"
              onClick={() => handleItemClick(item.label)}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <p className="nav-label">{item.label}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;





//header
import React from 'react';

const Header = ({ onMenuClick }) => {
  const handleNotificationClick = () => {
    console.log('Notifications clicked');
    // Add notification logic here
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
    // Add profile logic here
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={onMenuClick}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="header-title">Staff Records</h2>
      </div>
      
      <div className="header-right">
        <button className="notification-button" onClick={handleNotificationClick}>
          <span className="material-symbols-outlined">notifications</span>
        </button>
        
        <div className="profile-section" onClick={handleProfileClick}>
          <div className="profile-avatar"></div>
          <div className="profile-info">
            <p className="profile-name">Admin User</p>
            <p className="profile-email">admin@acme.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;





//stafftable
import React, { useState } from 'react';

const StaffTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const staffData = [
    {
      id: 'EMP001',
      name: 'Sophia Carter',
      phone: '555-123-4567',
      email: 'sophia.carter@email.com',
      department: 'Sales',
      designation: 'Sales Manager',
      status: 'Active'
    },
    {
      id: 'EMP002',
      name: 'Ethan Bennett',
      phone: '555-987-6543',
      email: 'ethan.bennett@email.com',
      department: 'Marketing',
      designation: 'Marketing Specialist',
      status: 'Active'
    },
    {
      id: 'EMP003',
      name: 'Olivia Hayes',
      phone: '555-246-8013',
      email: 'olivia.hayes@email.com',
      department: 'Engineering',
      designation: 'Software Engineer',
      status: 'Active'
    },
    {
      id: 'EMP004',
      name: 'Liam Foster',
      phone: '555-369-1470',
      email: 'liam.foster@email.com',
      department: 'HR',
      designation: 'HR Coordinator',
      status: 'Active'
    },
    {
      id: 'EMP005',
      name: 'Ava Morgan',
      phone: '555-753-9512',
      email: 'ava.morgan@email.com',
      department: 'Finance',
      designation: 'Financial Analyst',
      status: 'Inactive'
    }
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log('Search term:', e.target.value);
  };

  const handleFilter = () => {
    console.log('Filter clicked');
    // Add filter logic here
  };

  const handleActionClick = (staffId) => {
    console.log('Action clicked for:', staffId);
    // Add action menu logic here
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="search-container">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            className="search-input"
            placeholder="Search by name, employee ID, department, designation, role, status"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <button className="filter-button" onClick={handleFilter}>
          <span className="material-symbols-outlined">filter_list</span>
          <span className="filter-text">Filter</span>
        </button>
      </div>
      
      <div className="table-wrapper">
        <table className="staff-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee</th>
              <th>Contact</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Status</th>
              <th className="actions-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.id} className="table-row">
                <td>{staff.id}</td>
                <td>
                  <p className="employee-name">{staff.name}</p>
                </td>
                <td>
                  <p className="contact-phone">{staff.phone}</p>
                  <p className="contact-email">{staff.email}</p>
                </td>
                <td>{staff.department}</td>
                <td>{staff.designation}</td>
                <td>
                  <span className={`status-badge ${staff.status.toLowerCase()}`}>
                    {staff.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <button 
                    className="action-button"
                    onClick={() => handleActionClick(staff.id)}
                  >
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="pagination">
        <p className="pagination-info">Showing 1 to 5 of 250 results</p>
        <div className="pagination-controls">
          <button 
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {[1, 2, 3].map(page => (
            <button
              key={page}
              className={`pagination-button ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <span className="pagination-ellipsis">...</span>
          <button 
            className="pagination-button"
            onClick={() => handlePageChange(50)}
          >
            50
          </button>
          <button 
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffTable;







//app.css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

:root {
  --primary-color: #137fec;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --green-100: #dcfce7;
  --green-500: #22c55e;
  --green-800: #166534;
  --red-100: #fee2e2;
  --red-500: #ef4444;
  --red-800: #991b1b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--gray-50);
  color: var(--gray-800);
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}

/* App Layout */
.app {
  position: relative;
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.app-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

/* Sidebar */
.sidebar {
  position: fixed;
  left: -256px;
  top: 0;
  height: 100vh;
  width: 256px;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  transition: left 0.3s ease;
  z-index: 1000;
}

.sidebar-open {
  left: 0;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
}

.logo {
  color: var(--primary-color);
}

.logo-icon {
  width: 28px;
  height: 28px;
}

.logo-text {
  color: var(--gray-800);
  font-size: 18px;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  color: var(--gray-500);
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  width: 100%;
}

.nav-item:hover {
  background-color: var(--gray-100);
}

.nav-item-active {
  color: white;
  background-color: var(--primary-color);
}

.nav-label {
  font-size: 14px;
  font-weight: 500;
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 12px 24px;
  border-bottom: 1px solid var(--gray-200);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-button {
  color: var(--gray-600);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.menu-button:hover {
  background-color: var(--gray-100);
}

.header-title {
  color: var(--gray-800);
  font-size: 18px;
  font-weight: 600;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.notification-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--gray-500);
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.notification-button:hover {
  background-color: var(--gray-100);
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.profile-section:hover {
  background-color: var(--gray-100);
}

.profile-avatar {
  width: 40px;
  height: 40px;
  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFmS5s17tPut5GqelHYZGQT7shvBNF7s6xh_VzAFDZykSSVZNv3-9aGp2oJ9-bDeF7oSyOHdpNBlJbBNtrci0sLl-GYOaCaLcc7wIgr1fmt-FFMz54kdvG0yJHaZEYxsjdMZ7H6iYtnrIA6IaLzn8Wipn814UVf2BRD8cDwUXey05m-vPkBan5LWPnhY7jeCtKG_s2qZJ1G6SVoILOkbpFEPKfja-HsGg9LZxUBngFnPVmtgNdmS-Wr5QnTCFl_SV5zyot8lOYhNTS');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}

.profile-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-800);
}

.profile-email {
  font-size: 12px;
  color: var(--gray-500);
}

/* Main Content */
.main {
  padding: 24px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-800);
}

.page-description {
  color: var(--gray-500);
  margin-top: 4px;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.stat-label {
  color: var(--gray-500);
  font-size: 14px;
  font-weight: 500;
}

.stat-value {
  color: var(--gray-800);
  font-size: 24px;
  font-weight: 700;
}

.stat-value.active {
  color: var(--green-500);
}

.stat-value.inactive {
  color: var(--red-500);
}

/* Table Container */
.table-container {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
}

.search-container {
  position: relative;
  flex: 1;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray-400);
  font-size: 16px;
}

.search-input {
  width: 100%;
  padding: 8px 12px 8px 40px;
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  font-size: 14px;
  color: var(--gray-700);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 1px var(--primary-color);
}

.search-input::placeholder {
  color: var(--gray-400);
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border: 1px solid var(--gray-300);
  color: var(--gray-700);
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-width: 84px;
  justify-content: center;
}

.filter-button:hover {
  background-color: var(--gray-50);
}

.filter-text {
  white-space: nowrap;
}

/* Table */
.table-wrapper {
  overflow-x: auto;
}

.staff-table {
  width: 100%;
  font-size: 14px;
  text-align: left;
  color: var(--gray-500);
}

.staff-table thead {
  font-size: 12px;
  color: var(--gray-700);
  text-transform: uppercase;
  background-color: var(--gray-50);
}

.staff-table th,
.staff-table td {
  padding: 12px 24px;
}

.actions-header {
  text-align: right;
}

.table-row {
  background: white;
  border-bottom: 1px solid var(--gray-200);
  transition: background-color 0.2s ease;
}

.table-row:hover {
  background-color: var(--gray-50);
}

.employee-name {
  font-weight: 500;
  color: var(--gray-900);
}

.contact-phone {
  font-weight: 500;
}

.contact-email {
  color: var(--gray-500);
  font-size: 12px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
}

.status-badge.active {
  background-color: var(--green-100);
  color: var(--green-800);
}

.status-badge.inactive {
  background-color: var(--red-100);
  color: var(--red-800);
}

.actions-cell {
  text-align: right;
}

.action-button {
  padding: 6px;
  color: var(--gray-500);
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  color: var(--gray-700);
  background-color: var(--gray-100);
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid var(--gray-200);
}

.pagination-info {
  font-size: 14px;
  color: var(--gray-500);
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--gray-300);
  color: var(--gray-500);
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 14px;
}

.pagination-button:hover:not(:disabled) {
  background-color: var(--gray-100);
}

.pagination-button.active {
  background-color: var(--gray-100);
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-ellipsis {
  color: var(--gray-500);
  padding: 0 4px;
}

/* Responsive Design */
@media (min-width: 1024px) {
  .sidebar {
    position: static;
    left: 0;
  }
  
  .sidebar-overlay {
    display: none;
  }
  
  .main-content {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 12px 16px;
  }
  
  .main {
    padding: 16px;
  }
  
  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .table-header {
    flex-direction: column;
    gap: 12px;
  }
  
  .search-container {
    width: 100%;
  }
  
  .filter-button {
    width: 100%;
  }
  
  .pagination {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  
  .pagination-controls {
    align-self: center;
  }
  
  .profile-info {
    display: none;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .header-right {
    gap: 8px;
  }
  
  .profile-section {
    gap: 8px;
  }
  
  .staff-table th,
  .staff-table td {
    padding: 8px 12px;
  }
  
  .pagination-controls {
    flex-wrap: wrap;
    justify-content: center;
  }
}





//index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Add Material Symbols font to head
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
