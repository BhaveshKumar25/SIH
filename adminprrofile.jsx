import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-root">
      <main className="main-content">
        {/* Profile Overview */}
        <div className="profile-overview glassmorphism">
          <div className="profile-left">
            <div className="profile-image-wrapper">
              <div
                className="profile-image"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7GMu1NLEL9MKpZEOW3Gpdw7_jZ9m7xHY0-MHEQtx3Gb-pFhLUCW5beQ1bixylc1dAiT0nmckwON7hKcRf6MJhoKYQQf4Exh-1rTvRCjitKKDvvWwEyi4ne5LsGTCXZfwqHxgyVOoxI4caLWnJi1E9Oar6ewhPYtkMhPIMplFMB0dMJq3GL59ZsZkd4NVGCY53KPPt-25nGrWZvOw7-H6pK-g7vSLrpYoxK5T7_KjC_qZkbqQcLRAwKM4h5qbVaKsPkzwXa6-EucJM')",
                }}
              ></div>
              <button className="add-photo-btn">
                <span className="material-symbols-outlined">add_a_photo</span>
              </button>
            </div>
            <div className="profile-info">
              <h2>Jane Doe</h2>
              <p>Admin ID: ADM-0123</p>
            </div>
          </div>
          <div>
            <button className="available-btn">
              <span className="pulse-dot"></span>Available
            </button>
          </div>
        </div>

        {/* Admin Information */}
        <div className="admin-info glassmorphism">
          <h3>Admin Information</h3>
          <div className="info-grid">
            <div className="info-row"><p>Full Name</p><p>Jane Doe</p></div>
            <div className="info-row"><p>Admin ID</p><p>ADM-0123</p></div>
            <div className="info-row"><p>Designation</p><p>Admissions Officer</p></div>
            <div className="info-row"><p>Date of Joining</p><p>01 / June / 2020</p></div>
            <div className="info-row"><p>Highest Qualification</p><p>Master's Degree</p></div>
            <div className="info-row"><p>Official Email</p><p>jane.doe@university.edu</p></div>
            <div className="info-row"><p>Phone Number</p><p>+1 (555) 123-4567</p></div>
            <div className="info-row"><p>Cabin Number</p><p>C-205</p></div>
            <div className="info-row"><p>Office Hours</p><p>Mon-Fri, 9am - 5pm</p></div>
            <div className="info-row"><p>Years of Experience</p><p>4 Years</p></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;









//css code
body, html {
  margin: 0;
  font-family: 'Space Grotesk', 'Noto Sans', sans-serif;
  background: #f3f4f6;
}

/* Glassmorphism */
.glassmorphism {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
}

/* Layout */
.dashboard-root {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Profile Overview */
.profile-overview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.profile-left {
  display: flex;
  gap: 2rem;
}

.profile-image-wrapper {
  position: relative;
}

.profile-image {
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 4px solid rgba(0,0,0,0.05);
  background-size: cover;
  background-position: center;
}

.add-photo-btn {
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: #3b82f6;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-info h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
}

.profile-info p {
  font-size: 1rem;
  color: #6b7280;
}

.available-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: rgba(134,239,172,0.5);
  color: #047857;
  border: none;
  cursor: pointer;
  font-weight: 500;
}

.pulse-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 2px solid #34d399;
  background: #10b981;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(0.8); opacity: 0.7; }
  50% { transform: scale(1); opacity: 1; }
}

/* Admin Info */
.admin-info {
  padding: 2rem;
}

.admin-info h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 1rem 2rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(209,213,219,0.5);
}

.info-row p:first-child {
  color: #6b7280;
  font-size: 1rem;
}

.info-row p:last-child {
  font-weight: 500;
  color: #374151;
}
