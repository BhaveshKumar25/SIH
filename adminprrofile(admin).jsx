//App.jsx

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeNav, setActiveNav] = useState('profile');

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    console.log(`Clicked: ${navItem}`);
  };

  const handleNotificationClick = () => {
    console.log('Notification clicked');
  };

  const handlePhotoUpload = () => {
    console.log('Photo upload clicked');
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <span className="material-symbols-outlined logo-icon" onClick={() => handleNavClick('home')}>
            school
          </span>
          <h1 className="app-title">Academix</h1>
        </div>
        <div className="header-right">
          <button className="notification-btn" onClick={handleNotificationClick}>
            <span className="material-symbols-outlined">notifications</span>
            <span className="notification-dot"></span>
          </button>
          <h2 className="university-name">Springfield University</h2>
        </div>
      </header>

      <div className="main-container">
        <aside className="sidebar">
          <nav className="nav">
            <a 
              href="#" 
              className={`nav-item ${activeNav === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleNavClick('dashboard')}
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="nav-text">Dashboard</span>
            </a>
            <a 
              href="#" 
              className={`nav-item ${activeNav === 'courses' ? 'active' : ''}`}
              onClick={() => handleNavClick('courses')}
            >
              <span className="material-symbols-outlined">book</span>
              <span className="nav-text">Courses</span>
            </a>
            <a 
              href="#" 
              className={`nav-item ${activeNav === 'grades' ? 'active' : ''}`}
              onClick={() => handleNavClick('grades')}
            >
              <span className="material-symbols-outlined">bar_chart</span>
              <span className="nav-text">Grades</span>
            </a>
            <a 
              href="#" 
              className={`nav-item ${activeNav === 'attendance' ? 'active' : ''}`}
              onClick={() => handleNavClick('attendance')}
            >
              <span className="material-symbols-outlined">calendar_today</span>
              <span className="nav-text">Attendance</span>
            </a>
            <a 
              href="#" 
              className={`nav-item active ${activeNav === 'profile' ? 'current' : ''}`}
              onClick={() => handleNavClick('profile')}
            >
              <span className="material-symbols-outlined">person</span>
              <span className="nav-text">Profile</span>
            </a>
            <a 
              href="#" 
              className={`nav-item ${activeNav === 'settings' ? 'active' : ''}`}
              onClick={() => handleNavClick('settings')}
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="nav-text">Settings</span>
            </a>
          </nav>
          <div className="nav-footer">
            <a 
              href="#" 
              className="nav-item"
              onClick={() => handleNavClick('logout')}
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="nav-text">Logout</span>
            </a>
          </div>
        </aside>

        <div className="content-wrapper">
          <main className="main-content">
            <div className="profile-section">
              <div className="profile-header glassmorphism">
                <div className="profile-info">
                  <div className="avatar-container">
                    <div 
                      className="avatar"
                      style={{
                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7GMu1NLEL9MKpZEOW3Gpdw7_jZ9m7xHY0-MHEQtx3Gb-pFhLUCW5beQ1bixylc1dAiT0nmckwON7hKcRf6MJhoKYQQf4Exh-1rTvRCjitKKDvvWwEyi4ne5LsGTCXZfwqHxgyVOoxI4caLWnJi1E9Oar6ewhPYtkMhPIMplFMB0dMJq3GL59ZsZkd4NVGCY53KPPt-25nGrWZvOw7-H6pK-g7vSLrpYoxK5T7_KjC_qZkbqQcLRAwKM4h5qbVaKsPkzwXa6-EucJM")'
                      }}
                    ></div>
                    <button className="photo-upload-btn" onClick={handlePhotoUpload}>
                      <span className="material-symbols-outlined">add_a_photo</span>
                    </button>
                  </div>
                  <div className="user-details">
                    <h2 className="user-name">Jane Doe</h2>
                    <p className="user-id">Admin ID: ADM-0123</p>
                  </div>
                </div>
                <div className="status-section">
                  <button className="status-btn">
                    <span className="status-dot"></span>
                    <span>Available</span>
                  </button>
                </div>
              </div>

              <div className="admin-info glassmorphism">
                <h3 className="section-title">Admin Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <p className="info-label">Full Name</p>
                    <p className="info-value">Jane Doe</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">Admin ID</p>
                    <p className="info-value">ADM-0123</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">Designation</p>
                    <p className="info-value">Admissions Officer</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">Date of Joining</p>
                    <p className="info-value">01 / June / 2020</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">Highest Qualification</p>
                    <p className="info-value">Master's Degree</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">Official Email</p>
                    <p className="info-value">jane.doe@university.edu</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">Phone Number</p>
                    <p className="info-value">+1 (555) 123-4567</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">Cabin Number</p>
                    <p className="info-value">C-205</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">Office Hours</p>
                    <p className="info-value">Mon-Fri, 9am - 5pm</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">Years of Experience</p>
                    <p className="info-value">4 Years</p>
                  </div>
                </div>
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



@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Noto+Sans:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --c-gray-900: #e5e7eb;
  --c-gray-700: #d1d5db;
  --c-gray-500: #9ca3af;
  --c-gray-400: #6b7280;
  --c-gray-300: #4b5563;
  --c-gray-200: #f3f4f6;
  --c-gray-800: #f9fafb;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
}

.app {
  font-family: "Space Grotesk", "Noto Sans", sans-serif;
  background-color: #f3f4f6;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

/* Header Styles */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.logo-icon {
  font-size: 1.875rem;
  color: #1f2937;
  cursor: pointer;
  transition: color 0.2s ease;
  flex-shrink: 0;
}

.logo-icon:hover {
  color: #3b82f6;
}

.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
}

.notification-btn {
  position: relative;
  border-radius: 50%;
  padding: 0.5rem;
  color: #6b7280;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.notification-btn:hover {
  background-color: rgba(229, 231, 235, 0.5);
  color: #374151;
}

.notification-dot {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #3b82f6;
  border-radius: 50%;
}

.university-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Main Container */
.main-container {
  display: flex;
  flex: 1;
  width: 100%;
}

/* Sidebar */
.sidebar {
  width: 240px;
  min-width: 240px;
  max-width: 240px;
  background-color: var(--c-gray-200);
  padding: 1rem;
  color: #4b5563;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  overflow-y: auto;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  flex-grow: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.nav-item:hover {
  background-color: rgba(75, 85, 99, 0.6);
  color: #111827;
}

.nav-item.active.current {
  background: linear-gradient(to right, rgba(75, 85, 99, 0.7), transparent);
  color: #111827;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  font-weight: 700;
}

.nav-item.active.current::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(59, 130, 246, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-item.active.current:hover::before {
  opacity: 1;
}

.nav-text {
  font-weight: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-footer {
  margin-top: auto;
  border-top: 1px solid rgba(75, 85, 99, 0.3);
  padding-top: 1rem;
}

/* Content Wrapper */
.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
}

.main-content {
  flex: 1;
  background: rgba(249, 250, 251, 0.5);
  padding: 2rem;
  width: 100%;
  overflow-x: hidden;
}

.profile-section {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
}

/* Profile Header */
.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75rem;
  padding: 2rem;
  width: 100%;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 2rem;
  min-width: 0;
  flex: 1;
}

.avatar-container {
  position: relative;
  flex-shrink: 0;
}

.avatar {
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.photo-upload-btn {
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.photo-upload-btn:hover {
  background-color: #2563eb;
}

.photo-upload-btn .material-symbols-outlined {
  font-size: 1.5rem;
}

.user-details {
  min-width: 0;
  flex: 1;
}

.user-name {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-id {
  font-size: 1.125rem;
  color: #4b5563;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status-section {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.status-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  background: rgba(187, 247, 208, 0.8);
  padding: 0.5rem 1rem;
  color: #166534;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(74, 222, 128, 0.3);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.status-btn:hover {
  background: rgba(187, 247, 208, 0.9);
  box-shadow: 0 6px 20px rgba(74, 222, 128, 0.23);
}

.status-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 2px solid #4ade80;
  background-color: #22c55e;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Admin Info Section */
.admin-info {
  border-radius: 0.75rem;
  padding: 2rem;
  width: 100%;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.info-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-value {
  font-weight: 600;
  color: #374151;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .sidebar {
    width: 200px;
    min-width: 200px;
    max-width: 200px;
  }
  
  .info-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 1024px) {
  .header {
    padding: 1rem;
  }
  
  .sidebar {
    width: 180px;
    min-width: 180px;
    max-width: 180px;
  }
  
  .main-content {
    padding: 1.5rem;
  }
  
  .profile-info {
    gap: 1.5rem;
  }
  
  .avatar {
    width: 7rem;
    height: 7rem;
  }
  
  .user-name {
    font-size: 1.875rem;
  }
  
  .info-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: auto;
    padding: 0.5rem;
    order: 2;
  }
  
  .content-wrapper {
    order: 1;
  }
  
  .nav {
    flex-direction: row;
    overflow-x: auto;
    padding: 0.5rem 0;
    gap: 0.25rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .nav::-webkit-scrollbar {
    display: none;
  }
  
  .nav-item {
    flex-shrink: 0;
    padding: 0.75rem;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 5rem;
    text-align: center;
  }
  
  .nav-text {
    font-size: 0.75rem;
  }
  
  .nav-footer {
    margin-top: 0;
    border-top: none;
    padding-top: 0;
  }
  
  .profile-header {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .profile-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .avatar {
    width: 6rem;
    height: 6rem;
  }
  
  .user-name {
    font-size: 1.5rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .info-item {
    padding: 0.75rem;
  }
  
  .header-right {
    gap: 0.5rem;
  }
  
  .university-name {
    font-size: 1rem;
  }
}

@media (max-width: 640px) {
  .header {
    padding: 0.75rem 1rem;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .profile-section {
    gap: 1.5rem;
  }
  
  .profile-header, 
  .admin-info {
    padding: 1.5rem;
  }
  
  .avatar {
    width: 5rem;
    height: 5rem;
  }
  
  .user-name {
    font-size: 1.25rem;
  }
  
  .section-title {
    font-size: 1.25rem;
  }
  
  .app-title {
    font-size: 1.125rem;
  }
  
  .info-grid {
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 0.75rem;
  }
  
  .university-name {
    display: none;
  }
  
  .profile-header, 
  .admin-info {
    padding: 1rem;
  }
  
  .avatar {
    width: 4.5rem;
    height: 4.5rem;
  }
  
  .user-name {
    font-size: 1.125rem;
  }
  
  .info-item {
    padding: 0.5rem;
  }
  
  .info-value {
    font-size: 0.875rem;
  }
  
  .info-label {
    font-size: 0.75rem;
  }
}

/* Material Icons */
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48;
  user-select: none;
}

/* Clickable elements */
.nav-item,
.notification-btn,
.photo-upload-btn,
.status-btn,
.logo-icon {
  cursor: pointer;
  user-select: none;
}

/* Scrollbar styling */
.sidebar::-webkit-scrollbar {
  width: 4px;
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}
