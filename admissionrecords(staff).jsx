/* General Lay
import React from "react";
import "./admissrecord.css";

function StudentDetails() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <span className="material-symbols-outlined logo-icon">school</span>
          <h2 className="navbar-title">Acme University</h2>
        </div>
        <nav className="navbar-links">
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link active">Students</a>
          <a href="#" className="nav-link">Staff</a>
          <a href="#" className="nav-link">Courses</a>
          <a href="#" className="nav-link">Finance</a>
          <a href="#" className="nav-link">Reports</a>
        </nav>
        <div className="navbar-right">
          <button className="notification-btn">
            <span className="material-symbols-outlined">notifications</span>
            <span className="notification-dot"></span>
          </button>
          <div
            className="profile-avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsaslKQyWUvKTLhcyGYa_VD8hAFBYDivo6-NQ5GDjdshwRmx2AWjDeB5DN5NicLzp0qxGzptuusEIeUh2eRPmwKPirEkurSqb-xzt7iq5GL85FmAAlr8kmY7WH_pQvPFNJhYLm6s6yRJjy4rER-P43N3P1Wa07gg0kKNlPG3705Ayw3GrLXfcTONnuIephtoFA1qZ-ZeksMqOkHlpJ2DCfDKAFrKHvgCuy7k7ps7tnHZ6cJ_q2B8KYkspCS10GK2Koh2LgNGiZEjRt')",
            }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Page Heading */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Student Details</h1>
            <p className="page-subtitle">
              View and manage information for <b>Sophia Clark</b>.
            </p>
          </div>
          <div className="page-actions">
            <button className="btn-outline">
              <span className="material-symbols-outlined">print</span>
              Print
            </button>
            <button className="btn-primary">
              <span className="material-symbols-outlined">edit</span>
              Edit Details
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="profile-grid">
          {/* Left Profile Card */}
          <div className="profile-card">
            <div
              className="profile-photo"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQJM0oMJIzfeg5wF2fkc6dgb7o5MikrWTcp2T9nlgbo2qbmJUvi00jngN4R4uOn830CLhm6wpY_fw3Ob3nJkWrL42O6MypzZc_3W2MksDktI0Qpo95EGxGaDjNjvZ5WZdaYBLdALV0Kg7J578JwJDdxlQNMbhiW6tmdtF8csVOFzUTBxln2CIb43_TJg2XtZy5Dy2eintykoJEJGQjrS_fXXf7mYj_aF2MhR50LyFfHM4ZUarkr8YU6wa5chg0112F8-JGqS-M9rXK')",
              }}
            ></div>
            <h2 className="student-name">Sophia Clark</h2>
            <p className="student-id">STU12345</p>
          </div>

          {/* Right Details */}
          <div className="details-section">
            {/* Student Profile */}
            <div className="details-card">
              <h3 className="section-title">Student Profile</h3>
              <div className="details-grid">
                <Detail label="Student Name" value="Sophia Clark" />
                <Detail label="Email Address" value="sophia.c@collegename.edu" />
                <Detail label="Contact No." value="+1 (555) 123-4567" />
                <Detail label="Degree" value="B.Sc in Computer Science" />
                <Detail label="Department" value="Computer Science" />
                <Detail label="Admission Year" value="2023" />
              </div>
            </div>

            {/* Personal Details */}
            <div className="details-card">
              <h3 className="section-title">Personal Details</h3>
              <div className="details-grid">
                <Detail label="Father's Name" value="Ethan Clark" />
                <Detail label="Mother's Name" value="Olivia Clark" />
                <Detail label="Gender" value="Female" />
                <Detail label="Date of Birth" value="15-01-2003" />
                <Detail label="Category" value="General" />
                <Detail label="Blood Group" value="O+" />
                <Detail label="Community" value="Not Applicable" />
                <Detail label="Nationality" value="American" />
                <Detail label="Address" value="123 Maple Street, Anytown, CA 91234" />
                <Detail label="Aadhar Card No" value="**** **** 9012" />
                <Detail label="Identity Mark" value="Mole on left cheek" />
                <Detail label="Admission Date" value="20-08-2023" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ✅ Reusable Detail Component
function Detail({ label, value }) {
  return (
    <div className="detail-item">
      <p className="detail-label">{label}</p>
      <p className="detail-value">{value}</p>
    </div>
  );
}

export default StudentDetails;


out */___________________________________________css
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f9fafb;
  font-family: "Inter", "Noto Sans", sans-serif;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 32px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.navbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-icon {
  font-size: 28px;
  color: #1173d4;
}
.navbar-title {
  font-size: 18px;
  font-weight: bold;
  color: #1f2937;
}
.navbar-links {
  display: flex;
  gap: 16px;
}
.nav-link {
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  color: #374151;
  text-decoration: none;
  transition: 0.2s;
}
.nav-link:hover {
  color: #1173d4;
  background: #f3f4f6;
}
.nav-link.active {
  background: #1173d4;
  color: #fff;
  font-weight: 500;
}
.navbar-right {
  display: flex;
  gap: 16px;
  align-items: center;
}
.notification-btn {
  position: relative;
  color: #6b7280;
  border: none;
  background: none;
  cursor: pointer;
}
.notification-btn:hover {
  color: #374151;
}
.notification-dot {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 50%;
}
.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 32px 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}
.page-title {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
}
.page-subtitle {
  color: #6b7280;
  margin-top: 4px;
}
.page-actions {
  display: flex;
  gap: 12px;
}
.btn-outline {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #ffffff;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
}
.btn-outline:hover {
  background: #f9fafb;
}
.btn-primary {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 6px;
  background: #1173d4;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
}
.btn-primary:hover {
  background: #0d5ba8;
}

/* Profile Section */
.profile-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 1024px) {
  .profile-grid {
    grid-template-columns: 1fr 3fr;
  }
}
.profile-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin: 0 auto 16px;
}
.student-name {
  font-size: 20px;
  font-weight: bold;
  color: #111827;
}
.student-id {
  font-size: 14px;
  color: #6b7280;
}

/* Details Section */
.details-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.details-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 8px;
}
.details-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .details-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.detail-item .detail-label {
  font-size: 13px;
  color: #6b7280;
}
.detail-item .detail-value {
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
}

