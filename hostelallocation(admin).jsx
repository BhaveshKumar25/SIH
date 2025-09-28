//App.jsx
import React, { useState } from 'react';
import './App.css';

const CampusConnect = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="app-container">
      <div className="main-wrapper">
        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-content">
            <div className="sidebar-header">
              <div className="logo-container">
                <div className="logo-icon">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                  </svg>
                </div>
                {!isSidebarCollapsed && <h2 className="app-title">CampusConnect</h2>}
              </div>
              <nav className="nav-menu">
                <a className="nav-item" href="#">
                  <span className="material-symbols-outlined">dashboard</span>
                  {!isSidebarCollapsed && <span>Dashboard</span>}
                </a>
                <a className="nav-item active" href="#">
                  <span className="material-symbols-outlined">bed</span>
                  {!isSidebarCollapsed && <span>Hostel Records</span>}
                </a>
                <a className="nav-item" href="#">
                  <span className="material-symbols-outlined">door_front</span>
                  {!isSidebarCollapsed && <span>Rooms</span>}
                </a>
                <a className="nav-item" href="#">
                  <span className="material-symbols-outlined">groups</span>
                  {!isSidebarCollapsed && <span>Students</span>}
                </a>
                <a className="nav-item" href="#">
                  <span className="material-symbols-outlined">payments</span>
                  {!isSidebarCollapsed && <span>Fees</span>}
                </a>
                <a className="nav-item" href="#">
                  <span className="material-symbols-outlined">campaign</span>
                  {!isSidebarCollapsed && <span>Complaints</span>}
                </a>
                <a className="nav-item" href="#">
                  <span className="material-symbols-outlined">analytics</span>
                  {!isSidebarCollapsed && <span>Reports</span>}
                </a>
                <a className="nav-item" href="#">
                  <span className="material-symbols-outlined">settings</span>
                  {!isSidebarCollapsed && <span>Settings</span>}
                </a>
              </nav>
            </div>
            <div className="sidebar-footer">
              <button className="collapse-btn" onClick={toggleSidebar}>
                <span className="material-symbols-outlined">menu_open</span>
                {!isSidebarCollapsed && <span>Collapse</span>}
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <header className="header">
            <div className="header-left">
              <h1>Hostel Records</h1>
            </div>
            <div className="header-right">
              <div className="search-container">
                <span className="material-symbols-outlined search-icon">search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={handleSearch}
                  className="search-input"
                />
              </div>
              <button className="notification-btn">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="profile-section">
                <div className="profile-avatar"></div>
                <div className="profile-info">
                  <p className="profile-name">Admin</p>
                  <p className="profile-email">admin@campus.edu</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="content">
            <div className="content-header">
              <h3>Hostel Warden Name</h3>
              <p>Manage hostel occupancy and student assignments.</p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-label">Total Rooms</p>
                <p className="stat-value">250</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Occupied</p>
                <p className="stat-value">200</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Vacant</p>
                <p className="stat-value">50</p>
              </div>
            </div>

            {/* Controls */}
            <div className="controls">
              <div className="controls-left">
                <button className="dropdown-btn">
                  <span>Hostel</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
              </div>
              <div className="controls-right">
                <button className="filter-btn">
                  <span className="material-symbols-outlined">filter_alt</span>
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Room No.</th>
                    <th>Floor</th>
                    <th>Status</th>
                    <th>Name</th>
                    <th>MIS No.</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="room-info">
                        <div className="room-number">A-101</div>
                        <div className="room-building">Maple Residence</div>
                      </div>
                    </td>
                    <td>1</td>
                    <td>
                      <span className="status-badge occupied">Occupied</span>
                    </td>
                    <td>
                      <div className="student-name">Sophia Clark</div>
                    </td>
                    <td>2023001</td>
                    <td>
                      <button className="action-btn">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="room-info">
                        <div className="room-number">B-205</div>
                        <div className="room-building">Oak Hall</div>
                      </div>
                    </td>
                    <td>2</td>
                    <td>
                      <span className="status-badge vacant">Vacant</span>
                    </td>
                    <td className="empty-cell">-</td>
                    <td className="empty-cell">-</td>
                    <td>
                      <button className="action-btn">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="room-info">
                        <div className="room-number">A-102</div>
                        <div className="room-building">Maple Residence</div>
                      </div>
                    </td>
                    <td>1</td>
                    <td>
                      <span className="status-badge occupied">Occupied</span>
                    </td>
                    <td>
                      <div className="student-name">Ethan Carter</div>
                    </td>
                    <td>2024002</td>
                    <td>
                      <button className="action-btn">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="pagination-container">
              <p className="pagination-info">Showing 1 to 3 of 250 records</p>
              <div className="pagination">
                <button className="pagination-btn">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <span className="pagination-dots">...</span>
                <button className="pagination-btn">25</button>
                <button className="pagination-btn">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CampusConnect;






//App.css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

:root {
  --primary-50: #eef7ff;
  --primary-100: #d9eaff;
  --primary-200: #badfff;
  --primary-300: #93d0ff;
  --primary-400: #64baff;
  --primary-500: #3f9eff;
  --primary-600: #137fec;
  --primary-700: #0d6ac7;
  --primary-800: #1159a4;
  --primary-900: #124b86;
  --primary-950: #0d3056;
  --secondary-50: #f0f2f4;
  --secondary-100: #dbe0e6;
  --secondary-200: #c1c9d2;
  --secondary-300: #a1adc0;
  --secondary-400: #7f8fa8;
  --secondary-500: #617589;
  --secondary-600: #55667a;
  --secondary-700: #495669;
  --secondary-800: #3e4856;
  --secondary-900: #353d48;
  --secondary-950: #111418;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Noto Sans', sans-serif;
  background-color: #f9fafb;
  color: #111827;
  line-height: 1.5;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.app-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.main-wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
}

/* Sidebar Styles */
.sidebar {
  width: 256px;
  background: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 1rem;
}

.sidebar-header {
  flex: 1;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: var(--primary-600);
}

.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
  letter-spacing: -0.015em;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  color: #374151;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}

.nav-item:hover {
  background-color: #f3f4f6;
}

.nav-item.active {
  background-color: var(--primary-50);
  color: var(--primary-700);
  font-weight: 700;
}

.nav-item .material-symbols-outlined {
  color: #6b7280;
}

.nav-item.active .material-symbols-outlined {
  color: var(--primary-700);
}

.sidebar-footer {
  padding-top: 1rem;
}

.collapse-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  background: none;
  border: none;
  border-radius: 0.375rem;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.collapse-btn:hover {
  background-color: #f3f4f6;
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
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-left h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.015em;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-container {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #f9fafb;
  font-size: 0.875rem;
  color: #1f2937;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(63, 158, 255, 0.1);
}

.search-input::placeholder {
  color: #6b7280;
}

.notification-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
  color: #6b7280;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.notification-btn:hover {
  background-color: #f3f4f6;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAs5N0hKOwif8yCe6BQDn00nBgFkKqHOAf2Jol_Lt6ThbPMslfTnY2BsnmPaN9CfhUiW78vycFPXeCjzLCf46kQ3rJvPn5Ca8LCWGBdRz1tUfRcB1MxbVAoHJxSy4OrzTfrhTIfaR7zNMLMELLmDmWx0z8VxHCskV1nN_hOMlD31rRB4_rfu3aJ7Mk4DwBn-qlqc1ue40poa_Ftg_0kubwehU3q6dRbH0f1EmqmCvOhXk5_Di5zzUtgNorC3mXKH77yvmSFpDVerx7b");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1f2937;
}

.profile-email {
  font-size: 0.75rem;
  color: #6b7280;
}

/* Content */
.content {
  padding: 2rem;
  flex: 1;
}

.content-header {
  margin-bottom: 1.5rem;
}

.content-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.content-header p {
  font-size: 0.875rem;
  color: #6b7280;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.stat-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
}

/* Controls */
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.controls-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.controls-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-btn, .filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.dropdown-btn:hover, .filter-btn:hover {
  background-color: #f3f4f6;
}

.filter-btn {
  font-weight: 500;
  padding: 0.5rem 1rem;
}

/* Table */
.table-container {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.data-table {
  width: 100%;
  font-size: 0.875rem;
  border-collapse: collapse;
}

.data-table thead {
  background-color: #f9fafb;
}

.data-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #6b7280;
  border-bottom: 1px solid #d1d5db;
}

.data-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f3f4f6;
}

.data-table tr:last-child td {
  border-bottom: none;
}

.room-info {
  display: flex;
  flex-direction: column;
}

.room-number {
  font-weight: 500;
  color: #1f2937;
}

.room-building {
  color: #6b7280;
  font-size: 0.8rem;
}

.student-name {
  font-weight: 500;
  color: #1f2937;
}

.empty-cell {
  color: #6b7280;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-badge.occupied {
  background-color: #dcfce7;
  color: #166534;
}

.status-badge.vacant {
  background-color: #fef3c7;
  color: #92400e;
}

.action-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  transition: color 0.2s ease;
}

.action-btn:hover {
  color: var(--primary-600);
}

/* Pagination */
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.pagination-info {
  font-size: 0.875rem;
  color: #6b7280;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 0.375rem;
  background: none;
  color: #6b7280;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-btn:hover {
  background-color: #f3f4f6;
}

.pagination-btn.active {
  background-color: var(--primary-100);
  color: var(--primary-700);
  font-weight: 500;
}

.pagination-dots {
  color: #6b7280;
  padding: 0 0.5rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .header {
    padding: 1rem;
  }
  
  .content {
    padding: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 768px) {
  .main-wrapper {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .sidebar.collapsed {
    width: 100%;
  }
  
  .sidebar-content {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  
  .sidebar-header {
    flex: none;
  }
  
  .nav-menu {
    display: none;
  }
  
  .sidebar-footer {
    padding: 0;
  }
  
  .header {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .header-right {
    justify-content: space-between;
  }
  
  .search-container {
    order: -1;
    width: 100%;
  }
  
  .controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .controls-left,
  .controls-right {
    justify-content: center;
  }
  
  .table-container {
    font-size: 0.75rem;
  }
  
  .data-table th,
  .data-table td {
    padding: 0.5rem;
  }
  
  .pagination-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .profile-section {
    display: none;
  }
  
  .data-table {
    font-size: 0.7rem;
  }
  
  .room-building {
    display: none;
  }
}
