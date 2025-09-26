___________import React, { useState } from "react";
import "./Hostel.css";

export default function HostelApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationality: "",
    course: "",
    yearOfStudy: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully ✅");
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <a className="nav-link active">
            <span className="material-symbols-outlined">person</span>
            <span>Personal Details</span>
          </a>
          <a className="nav-link">
            <span className="material-symbols-outlined">school</span>
            <span>Academic Details</span>
          </a>
          <a className="nav-link">
            <span className="material-symbols-outlined">home</span>
            <span>Address Details</span>
          </a>
          <a className="nav-link">
            <span className="material-symbols-outlined">medical_services</span>
            <span>Medical Background</span>
          </a>
          <a className="nav-link">
            <span className="material-symbols-outlined">flag</span>
            <span>Declaration</span>
          </a>
        </nav>
      </aside>

      {/* Main Form */}
      <main className="main-content">
        <div className="form-header">
          <h1>Hostel Application Form</h1>
          <p>Please fill out the form carefully and accurately.</p>
        </div>

        <form onSubmit={handleSubmit} className="form-container">
          {/* Personal Details */}
          <section className="form-section">
            <h2>Personal Details</h2>
            <div className="form-grid">
              <input
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-input"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-input"
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                name="nationality"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </section>

          {/* Academic Details */}
          <section className="form-section">
            <h2>Academic Details</h2>
            <div className="form-grid">
              <input
                name="course"
                placeholder="Enter your course"
                value={formData.course}
                onChange={handleChange}
                className="form-input"
              />
              <input
                name="yearOfStudy"
                placeholder="Year of Study"
                value={formData.yearOfStudy}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </section>

          {/* Declaration */}
          <section className="form-section">
            <h2>Declaration</h2>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
              />
              <span>
                I hereby declare that the information provided above is true and
                correct to the best of my knowledge.
              </span>
            </label>
          </section>

          {/* Submit */}
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Submit Application
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
__________________________________________________css
.app-container {
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
  font-family: Arial, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 240px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 20px 10px;
  display: none;
}
@media (min-width: 1024px) {
  .sidebar {
    display: block;
  }
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 8px;
  color: #374151;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.2s, color 0.2s;
}
.nav-link:hover {
  background: #f3f4f6;
}
.nav-link.active {
  background: #e0f2fe;
  color: #0369a1;
  font-weight: bold;
}

/* Main content */
.main-content {
  flex: 1;
  padding: 30px;
  max-width: 900px;
  margin: 0 auto;
}
.form-header h1 {
  font-size: 26px;
  font-weight: bold;
  color: #111827;
}
.form-header p {
  color: #6b7280;
  margin-top: 6px;
}

/* Form */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.form-section {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
}
.form-section h2 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1f2937;
}
.form-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.form-input {
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
}
.form-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

/* Checkbox */
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #374151;
}
.checkbox-label input {
  margin-top: 3px;
  width: 18px;
  height: 18px;
}

/* Buttons */
.form-actions {
  display: flex;
  justify-content: flex-end;
}
.btn-primary {
  background: #2563eb;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover {
  background: #1e40af;
}
