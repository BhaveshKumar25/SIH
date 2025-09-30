//App.css
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="app-container">
      <div className="main-wrapper">
        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''} ${isMobileSidebarOpen ? 'mobile-open' : ''}`}>
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

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && <div className="sidebar-overlay" onClick={toggleMobileSidebar}></div>}

        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <header className="header">
            <div className="header-left">
              <button className="mobile-menu-btn" onClick={toggleMobileSidebar}>
                <span className="material-symbols-outlined">menu</span>
              </button>
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
              <div className="table-wrapper">
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

export default App;




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

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
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
  width: 100vw;
}

.main-wrapper {
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
}

/* Sidebar Styles */
.sidebar {
  width: 280px;
  min-width: 280px;
  background: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  transition: all 0.3s ease;
  z-index: 100;
}

.sidebar.collapsed {
  width: 80px;
  min-width: 80px;
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
  flex-shrink: 0;
}

.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
  letter-spacing: -0.015em;
  white-space: nowrap;
  overflow: hidden;
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
  white-space: nowrap;
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
  flex-shrink: 0;
}

.nav-item.active .material-symbols-outlined {
  color: var(--primary-700);
}

.sidebar-footer {
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
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
  white-space: nowrap;
}

.collapse-btn:hover {
  background-color: #f3f4f6;
}

/* Sidebar Overlay */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: none;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.mobile-menu-btn:hover {
  background-color: #f3f4f6;
  color: #1f2937;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
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
  z-index: 50;
  min-height: 72px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
}

.header-left h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.015em;
  white-space: nowrap;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.search-container {
  position: relative;
  width: 300px;
  max-width: 300px;
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
  flex-shrink: 0;
}

.notification-btn:hover {
  background-color: #f3f4f6;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAs5N0hKOwif8yCe6BQDn00nBgFkKqHOAf2Jol_Lt6ThbPMslfTnY2BsnmPaN9CfhUiW78vycFPXeCjzLCf46kQ3rJvPn5Ca8LCWGBdRz1tUfRcB1MxbVAoHJxSy4OrzTfrhTIfaR7zNMLMELLmDmWx0z8VxHCskV1nN_hOMlD31rRB4_rfu3aJ7Mk4DwBn-qlqc1ue40poa_Ftg_0kubwehU3q6dRbH0f1EmqmCvOhXk5_Di5zzUtgNorC3mXKH77yvmSFpDVerx7b");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1f2937;
  line-height: 1.2;
}

.profile-email {
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.2;
}

/* Content */
.content {
  padding: 2rem;
  flex: 1;
  overflow-x: auto;
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
  padding: 1.5rem;
  text-align: center;
  transition: box-shadow 0.2s ease;
}

.stat-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}

/* Controls */
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
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
  transition: all 0.2s ease;
  white-space: nowrap;
}

.dropdown-btn:hover, .filter-btn:hover {
  background-color: #f3f4f6;
}

.filter-btn {
  font-weight: 500;
  padding: 0.5rem 1rem;
}

/* Table Container */
.table-container {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.table-wrapper {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  font-size: 0.875rem;
  border-collapse: collapse;
  min-width: 600px;
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
  white-space: nowrap;
}

.data-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
}

.data-table tr:last-child td {
  border-bottom: none;
}

.data-table tr:hover {
  background-color: #f9fafb;
}

.room-info {
  display: flex;
  flex-direction: column;
}

.room-number {
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.room-building {
  color: #6b7280;
  font-size: 0.75rem;
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
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
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
  transition: all 0.2s ease;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.action-btn:hover {
  color: var(--primary-600);
  background-color: #f3f4f6;
}

/* Pagination */
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.pagination-info {
  font-size: 0.875rem;
  color: #6b7280;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
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

/* RESPONSIVE BREAKPOINTS */

/* Large Desktop (1400px+) */
@media (min-width: 1400px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .content {
    padding: 2.5rem;
  }
  
  .search-container {
    width: 400px;
    max-width: 400px;
  }
}

/* Desktop (1200px - 1399px) */
@media (min-width: 1200px) and (max-width: 1399px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Medium Desktop (1024px - 1199px) */
@media (min-width: 1024px) and (max-width: 1199px) {
  .sidebar {
    width: 240px;
    min-width: 240px;
  }
  
  .sidebar.collapsed {
    width: 70px;
    min-width: 70px;
  }
  
  .header {
    padding: 1rem 1.5rem;
  }
  
  .content {
    padding: 1.5rem;
  }
  
  .search-container {
    width: 250px;
    max-width: 250px;
  }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    z-index: 101;
    width: 280px;
    min-width: 280px;
  }

  .sidebar.mobile-open {
    transform: translateX(0);
  }

  .sidebar-overlay {
    display: block;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .main-content {
    width: 100%;
  }

  .header {
    padding: 1rem;
  }

  .header-left h1 {
    font-size: 1.25rem;
  }

  .search-container {
    width: 200px;
    max-width: 200px;
  }

  .content {
    padding: 1rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-card {
    padding: 1rem;
  }

  .data-table {
    font-size: 0.8rem;
  }

  .data-table th,
  .data-table td {
    padding: 0.5rem;
  }
}

/* Mobile Large (640px - 767px) */
@media (min-width: 640px) and (max-width: 767px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    z-index: 101;
    width: 260px;
    min-width: 260px;
  }

  .sidebar.mobile-open {
    transform: translateX(0);
  }

  .sidebar-overlay {
    display: block;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .header {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding: 1rem;
  }

  .header-left {
    justify-content: space-between;
  }

  .header-left h1 {
    font-size: 1.125rem;
  }

  .search-container {
    order: 1;
    width: 100%;
    max-width: 100%;
  }

  .header-right {
    order: 0;
    justify-content: flex-end;
  }

  .profile-info {
    display: none;
  }

  .content {
    padding: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .stat-card {
    padding: 1rem;
  }

  .controls {
    flex-direction: column;
    align-items: stretch;
  }

  .data-table {
    font-size: 0.75rem;
  }

  .data-table th,
  .data-table td {
    padding: 0.5rem 0.25rem;
  }

  .pagination-container {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
}

/* Mobile Medium (480px - 639px) */
@media (min-width: 480px) and (max-width: 639px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    z-index: 101;
    width: 240px;
    min-width: 240px;
  }

  .sidebar.mobile-open {
    transform: translateX(0);
  }

  .sidebar-overlay {
    display: block;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .header {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    padding: 0.75rem;
  }

  .header-left h1 {
    font-size: 1rem;
  }

  .search-container {
    order: 1;
    width: 100%;
    max-width: 100%;
  }

  .header-right {
    order: 0;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  .profile-info {
    display: none;
  }

  .profile-avatar {
    width: 32px;
    height: 32px;
  }

  .content {
    padding: 0.75rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .stat-card {
    padding: 0.75rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .controls {
    flex-direction: column;
    gap: 0.5rem;
  }

  .data-table {
    font-size: 0.7rem;
    min-width: 480px;
  }

  .data-table th,
  .data-table td {
    padding: 0.375rem 0.25rem;
  }

  .room-building {
    display: none;
  }
}

/* Mobile Small (320px - 479px) */
@media (max-width: 479px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    z-index: 101;
    width: 220px;
    min-width: 220px;
  }

  .sidebar.mobile-open {
    transform: translateX(0);
  }

  .sidebar-overlay {
    display: block;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .app-title {
    font-size: 1rem;
  }

  .nav-item {
    font-size: 0.8rem;
    padding: 0.375rem 0.5rem;
  }

  .header {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    padding: 0.5rem;
    min-height: auto;
  }

  .header-left h1 {
    font-size: 0.875rem;
  }

  .search-container {
    order: 1;
    width: 100%;
    max-width: 100%;
  }

  .search-input {
    font-size: 0.8rem;
    padding: 0.375rem 0.75rem 0.375rem 2rem;
  }

  .header-right {
    order: 0;
    justify-content: flex-end;
    gap: 0.25rem;
  }

  .profile-info {
    display: none;
  }

  .profile-avatar {
    width: 28px;
    height: 28px;
  }

  .notification-btn {
    padding: 0.375rem;
  }

  .content {
    padding: 0.5rem;
  }

  .content-header h3 {
    font-size: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .stat-card {
    padding: 0.5rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .stat-value {
    font-size: 1.25rem;
  }

  .controls {
    flex-direction: column;
    gap: 0.5rem;
  }

  .dropdown-btn, .filter-btn {
    width: 100%;
    justify-content: center;
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  .data-table {
    font-size: 0.65rem;
    min-width: 400px;
  }

  .data-table th,
  .data-table td {
    padding: 0.25rem 0.125rem;
  }

  .room-building {
    display: none;
  }

  .status-badge {
    font-size: 0.65rem;
    padding: 0.125rem 0.5rem;
  }

  .pagination-container {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .pagination-info {
    font-size: 0.75rem;
  }

  .pagination-btn {
    width: 32px;
    height: 32px;
    font-size: 0.75rem;
  }
}

/* Prevent body scroll when mobile sidebar is open */
body.sidebar-open {
  overflow: hidden;
}
