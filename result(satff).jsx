
import React from "react";
import "./Result.css";

export default function CollegeERP() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg className="logo-icon" fill="none" viewBox="0 0 48 48">
              <path
                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="sidebar-title">Acme University</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-link">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a href="#" className="nav-link">
            <span className="material-symbols-outlined">school</span>
            Admissions
          </a>
          <a href="#" className="nav-link">
            <span className="material-symbols-outlined">book</span>
            Courses
          </a>
          <a href="#" className="nav-link">
            <span className="material-symbols-outlined">people</span>
            Students
          </a>
          <a href="#" className="nav-link active">
            <span className="material-symbols-outlined">assessment</span>
            Results
          </a>
          <a href="#" className="nav-link">
            <span className="material-symbols-outlined">event_available</span>
            Attendance
          </a>
          <a href="#" className="nav-link">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-actions">
            <button className="notification-btn">
              <span className="material-symbols-outlined">notifications</span>
              <span className="notification-badge"></span>
            </button>
            <div
              className="user-avatar"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7nOPNxEr5sjKqbnerddyhb4XGIcQPhBJLy35k8AhXafyYLt-EE7e1ZFCBF5Rds_BJ4PCezBJ_YBKdk1MJmN2lct2kJEPJ-7uNBFETah6OhcrBQwX1SRVbRpPUOviaEsZQIZCoUEvFn2GxwTGqaWVZ92QM6YVE3epK_TkDws5L9c6Rr3xe4J_me8LU8fKllPUXlrEsh42S0ys0ZW_pkwm0lp3g2DZtfyqytJKb5LfSAW0FDKPfY2ehtFcQzRZoPtv304hx2e2P3xws')",
              }}
            ></div>
          </div>
        </header>

        {/* Upload Results */}
        <main className="content">
          <div className="content-header">
            <h1>Upload Results</h1>
            <p>Upload result documents for students.</p>
          </div>

          <div className="upload-card">
            <div className="upload-box">
              <span className="material-symbols-outlined upload-icon">
                cloud_upload
              </span>
              <h3>Drag and drop files here</h3>
              <p>or</p>
              <label htmlFor="file-upload" className="upload-btn">
                Browse Files
              </label>
              <input id="file-upload" type="file" hidden />
              <p className="upload-info">PDF, DOCX, XLSX up to 10MB</p>
            </div>

            <div className="submit-area">
              <button className="submit-btn">Submit</button>
            </div>

            <div className="uploaded-files">
              <h3>Uploaded Files</h3>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>File Name</th>
                      <th>File Size</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="material-symbols-outlined">description</span>
                        semester_5_results.pdf
                      </td>
                      <td>2.5 MB</td>
                      <td>
                        <span className="status success">Uploaded</span>
                      </td>
                      <td>
                        <button className="action-btn">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="material-symbols-outlined">description</span>
                        project_marks_final.docx
                      </td>
                      <td>1.2 MB</td>
                      <td>
                        <span className="status processing">Processing</span>
                      </td>
                      <td>
                        <button className="action-btn">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="material-symbols-outlined">description</span>
                        lab_evaluation.xlsx
                      </td>
                      <td>780 KB</td>
                      <td>
                        <span className="status failed">Failed</span>
                      </td>
                      <td>
                        <button className="action-btn">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </td>
                    </tr>
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

________________________________________________________________________-css
:root {
  --primary-color: #1173d4;
  --secondary-color: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  --bg-light: #ffffff;
}

/* Layout */
.app-container {
  display: flex;
  min-height: 100vh;
  font-family: "Inter", "Noto Sans", sans-serif;
  background-color: var(--secondary-color);
}

.sidebar {
  width: 25%;
  background: var(--bg-light);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.sidebar-logo {
  color: var(--primary-color);
}

.logo-icon {
  width: 32px;
  height: 32px;
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--text-primary);
}

.sidebar-nav {
  flex: 1;
  padding: 1.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 6px;
  text-decoration: none;
  transition: 0.2s ease;
}

.nav-link:hover {
  background-color: #f1f5f9;
  color: var(--primary-color);
}

.nav-link.active {
  background-color: var(--primary-color);
  color: #fff;
  font-weight: bold;
}

/* Header */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2.5rem;
  background: var(--bg-light);
  border-bottom: 1px solid var(--border-color);
}

.header-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.notification-btn {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
}

.notification-badge {
  position: absolute;
  top: 0;
  right: 0;
  height: 8px;
  width: 8px;
  background: red;
  border-radius: 50%;
  border: 2px solid #fff;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}

/* Content */
.content {
  flex: 1;
  padding: 2rem 2.5rem;
}

.content-header h1 {
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--text-primary);
}

.content-header p {
  margin-top: 0.25rem;
  color: var(--text-secondary);
}

/* Upload Card */
.upload-card {
  background: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.upload-box {
  border: 2px dashed var(--border-color);
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
}

.upload-icon {
  font-size: 3rem;
  color: var(--text-secondary);
}

.upload-box h3 {
  margin-top: 1rem;
  font-size: 1.125rem;
  color: var(--text-primary);
}

.upload-box p {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.upload-btn {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: var(--primary-color);
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.upload-btn:hover {
  background: #0d5cb2;
}

.upload-info {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* Submit button */
.submit-area {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.submit-btn {
  padding: 0.5rem 1.5rem;
  background: var(--primary-color);
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.submit-btn:hover {
  background: #0d5cb2;
}

/* Table */
.uploaded-files {
  margin-top: 2rem;
}

.uploaded-files h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.table-wrapper {
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 6px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

thead {
  background: #f8fafc;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #334155;
}

th, td {
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

td {
  color: #374151;
}

td .material-symbols-outlined {
  margin-right: 0.5rem;
  color: var(--text-secondary);
}

.status {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status.success {
  background: #dcfce7;
  color: #166534;
}

.status.processing {
  background: #dbeafe;
  color: #1e40af;
}

.status.failed {
  background: #fee2e2;
  color: #991b1b;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
}

.action-btn:hover {
  color: var(--primary-color);
}
