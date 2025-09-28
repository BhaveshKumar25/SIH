//App.jsx


import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('Department');
  const [selectedSemester, setSelectedSemester] = useState('Semester');
  const [selectedTopDepartment, setSelectedTopDepartment] = useState('Select Department');
  const [selectedSection, setSelectedSection] = useState('Select Section');

  const studentData = [
    { misNo: '1001', name: 'Liam Harper', department: 'Computer Science', semester: 'Fall 2023', grade: 'A', gradeClass: 'grade-a' },
    { misNo: '1002', name: 'Olivia Bennett', department: 'Electrical Engineering', semester: 'Fall 2023', grade: 'B+', gradeClass: 'grade-b' },
    { misNo: '1003', name: 'Noah Carter', department: 'Mechanical Engineering', semester: 'Fall 2023', grade: 'A-', gradeClass: 'grade-a' },
    { misNo: '1004', name: 'Emma Davis', department: 'Civil Engineering', semester: 'Fall 2023', grade: 'B', gradeClass: 'grade-c' },
    { misNo: '1005', name: 'Ethan Foster', department: 'Chemical Engineering', semester: 'Fall 2023', grade: 'A', gradeClass: 'grade-a' }
  ];

  const topPerformers = [
    { rank: 1, misNo: '1001', name: 'Liam Harper', department: 'Computer Science', grade: 'A', gradeClass: 'grade-a' },
    { rank: 2, misNo: '1005', name: 'Ethan Foster', department: 'Chemical Engineering', grade: 'A', gradeClass: 'grade-a' },
    { rank: 3, misNo: '1003', name: 'Noah Carter', department: 'Mechanical Engineering', grade: 'A-', gradeClass: 'grade-a' },
    { rank: 4, misNo: '1002', name: 'Olivia Bennett', department: 'Electrical Engineering', grade: 'B+', gradeClass: 'grade-b' },
    { rank: 5, misNo: '1004', name: 'Emma Davis', department: 'Civil Engineering', grade: 'B', gradeClass: 'grade-c' }
  ];

  const handleNotificationClick = () => {
    alert('Notifications clicked');
  };

  const handleNavClick = (section) => {
    console.log(`Navigating to ${section}`);
  };

  const handleViewDetails = (misNo) => {
    alert(`Viewing details for student ${misNo}`);
  };

  return (
    <div className="app">
      <div className="main-layout">
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="sidebar-top">
              <h1 className="sidebar-title">ERP Admin</h1>
              <nav className="nav">
                <button className="nav-item" onClick={() => handleNavClick('dashboard')}>
                  <span className="material-symbols-outlined">dashboard</span>
                  <p>Dashboard</p>
                </button>
                <button className="nav-item active" onClick={() => handleNavClick('results')}>
                  <span className="material-symbols-outlined">analytics</span>
                  <p>Results</p>
                </button>
                <button className="nav-item" onClick={() => handleNavClick('analytics')}>
                  <span className="material-symbols-outlined">monitoring</span>
                  <p>Analytics</p>
                </button>
                <button className="nav-item" onClick={() => handleNavClick('reports')}>
                  <span className="material-symbols-outlined">description</span>
                  <p>Reports</p>
                </button>
                <button className="nav-item" onClick={() => handleNavClick('settings')}>
                  <span className="material-symbols-outlined">settings</span>
                  <p>Settings</p>
                </button>
              </nav>
            </div>
            <div className="sidebar-bottom">
              <button className="nav-item" onClick={() => handleNavClick('help')}>
                <span className="material-symbols-outlined">help_outline</span>
                <p>Help and Docs</p>
              </button>
              <button className="nav-item" onClick={() => handleNavClick('feedback')}>
                <span className="material-symbols-outlined">campaign</span>
                <p>Feedback</p>
              </button>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <header className="header">
            <div className="header-content">
              <button className="notification-btn" onClick={handleNotificationClick}>
                <span className="material-symbols-outlined">notifications</span>
                <span className="notification-dot"></span>
              </button>
              <div className="user-profile">
                <img 
                  alt="Admin's profile photo" 
                  className="profile-img" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6vn_F3ouvoyzZ9dqr2lRf1RldtzrT1FaUl3PWE_sDSGSnzAXN3bOYbZaiMb19S9t2yFSNltMOnjm0L_TAtgwUyG9397RCujzKbc-rj51iXKw_4ssK1z5AYsC7B43QGZhVSj5DopYSU0sF7dIo-BFfKl13A6ODpbZE76hhweHoqh3TLRKTRTjtVX8VSmtzLpQ01x8sHh_Ebu_BbcXkpbKfsnunQ1K_5NF4dZ2hCqHn_3Gh1rCNcJRu9TA107alQWytnmpJ_XIDhU-a"
                />
                <div className="user-info">
                  <p className="user-name">Admin Name</p>
                  <p className="user-id">ID: 9999</p>
                </div>
              </div>
            </div>
          </header>

          <div className="content">
            <div className="page-header">
              <div className="page-title-section">
                <h1 className="page-title">Results & Analysis</h1>
                <p className="page-description">Manage student results and analyze performance.</p>
              </div>
            </div>

            <div className="card">
              <h2 className="card-title">Student Results</h2>
              <div className="filters">
                <div className="search-container">
                  <span className="material-symbols-outlined search-icon">search</span>
                  <input 
                    className="search-input"
                    placeholder="Search by student name or MIS No."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select 
                  className="select-input"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option>Department</option>
                  <option>Computer Science</option>
                  <option>Electrical Engineering</option>
                </select>
                <select 
                  className="select-input"
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                >
                  <option>Semester</option>
                  <option>Fall 2023</option>
                  <option>Spring 2023</option>
                </select>
              </div>

              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>MIS No.</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Semester</th>
                      <th>Overall Grade</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.map((student) => (
                      <tr key={student.misNo}>
                        <td>{student.misNo}</td>
                        <td className="student-name">{student.name}</td>
                        <td>{student.department}</td>
                        <td>{student.semester}</td>
                        <td>
                          <span className={`grade-badge ${student.gradeClass}`}>
                            {student.grade}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="action-link"
                            onClick={() => handleViewDetails(student.misNo)}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pagination">
                <p className="pagination-info">Showing 1 to 5 of 50 results</p>
                <div className="pagination-controls">
                  <button className="pagination-btn">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="pagination-btn active">1</button>
                  <button className="pagination-btn">2</button>
                  <button className="pagination-btn">3</button>
                  <span className="pagination-dots">...</span>
                  <button className="pagination-btn">10</button>
                  <button className="pagination-btn">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Top 5 Performers</h2>
                <div className="top-filters">
                  <select 
                    className="select-input"
                    value={selectedTopDepartment}
                    onChange={(e) => setSelectedTopDepartment(e.target.value)}
                  >
                    <option>Select Department</option>
                    <option>Computer Science</option>
                    <option>Electrical Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Chemical Engineering</option>
                  </select>
                  <select 
                    className="select-input"
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                  >
                    <option>Select Section</option>
                    <option>Section A</option>
                    <option>Section B</option>
                    <option>Section C</option>
                  </select>
                </div>
              </div>

              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>MIS No.</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Overall Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPerformers.map((student) => (
                      <tr key={student.misNo}>
                        <td className="student-name">{student.rank}</td>
                        <td>{student.misNo}</td>
                        <td className="student-name">{student.name}</td>
                        <td>{student.department}</td>
                        <td>
                          <span className={`grade-badge ${student.gradeClass}`}>
                            {student.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;





//App.css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');

/* CSS Variables */
:root {
  --primary-50: #eef6ff;
  --primary-100: #dbeeff;
  --primary-200: #bbdfff;
  --primary-300: #88cfff;
  --primary-400: #55bfff;
  --primary-500: #137fec;
  --primary-600: #0d69d7;
  --primary-700: #0a52b3;
  --primary-800: #073b8e;
  --primary-900: #052c74;
  --primary-950: #031a4f;
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Noto Sans', sans-serif;
  background-color: #f9fafb;
  line-height: 1.5;
}

.app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Main Layout */
.main-layout {
  display: flex;
  height: 100vh;
  flex: 1;
}

/* Sidebar */
.sidebar {
  width: 320px;
  flex-shrink: 0;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.sidebar-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.sidebar-top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar-title {
  padding: 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: none;
  background: none;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  text-align: left;
}

.nav-item:hover {
  background-color: #f3f4f6;
}

.nav-item.active {
  background-color: var(--primary-50);
  color: var(--primary-600);
}

.nav-item .material-symbols-outlined {
  color: #6b7280;
}

.nav-item.active .material-symbols-outlined {
  color: var(--primary-600);
}

.nav-item p {
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* Main Content */
.main-content {
  flex: 1;
  overflow-x: hidden;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #e5e7eb;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
  padding: 0 2rem;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  position: relative;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  background: none;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}

.notification-btn:hover {
  background-color: #f3f4f6;
  color: #1f2937;
}

.notification-dot {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--primary-500);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.profile-img {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.user-id {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
}

/* Content */
.content {
  padding: 2rem;
}

.page-header {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.page-title-section {
  display: flex;
  flex-direction: column;
}

.page-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.page-description {
  color: #6b7280;
  margin: 0;
}

/* Card */
.card {
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background-color: white;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.card-title {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.card-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

/* Filters */
.filters {
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
}

.top-filters {
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
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #f9fafb;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s;
}

.search-input:focus {
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(19, 127, 236, 0.1);
}

.select-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #f9fafb;
  font-size: 0.875rem;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
}

.select-input:focus {
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(19, 127, 236, 0.1);
}

/* Table */
.table-container {
  overflow-x: auto;
  margin-bottom: 1rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.data-table thead {
  background-color: #f9fafb;
}

.data-table th {
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;
}

.data-table td {
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
}

.student-name {
  font-weight: 500;
  color: #111827;
}

/* Grade Badges */
.grade-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.grade-a {
  background-color: #dcfce7;
  color: #166534;
}

.grade-b {
  background-color: #dbeafe;
  color: #1e40af;
}

.grade-c {
  background-color: #fef3c7;
  color: #92400e;
}

/* Action Link */
.action-link {
  background: none;
  border: none;
  color: var(--primary-600);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.action-link:hover {
  color: var(--primary-900);
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

.pagination-info {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
  color: #6b7280;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
}

.pagination-btn:hover {
  background-color: #f3f4f6;
}

.pagination-btn.active {
  background-color: var(--primary-500);
  color: white;
  border-color: var(--primary-500);
}

.pagination-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  font-size: 0.875rem;
  color: #6b7280;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .sidebar {
    width: 280px;
  }
  
  .content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: auto;
    position: static;
  }
  
  .sidebar-content {
    padding: 1rem;
  }
  
  .filters {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .top-filters {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
  
  .card-header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .pagination {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .pagination-controls {
    justify-content: center;
  }
  
  .header {
    padding: 0 1rem;
  }
  
  .content {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .data-table th,
  .data-table td {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
  
  .nav-item {
    padding: 0.75rem;
  }
  
  .nav-item p {
    font-size: 0.8rem;
  }
  
  .sidebar-title {
    font-size: 1.1rem;
  }
  
  .user-profile {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .table-container {
    font-size: 0.75rem;
  }
  
  .data-table th,
  .data-table td {
    padding: 0.375rem 0.5rem;
  }
  
  .pagination-btn {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 0.75rem;
  }
  
  .card {
    padding: 1rem;
  }
  
  .header-content {
    gap: 0.5rem;
  }
}
