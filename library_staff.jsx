
import React from "react";
import "./LibraryPortal.css";

function LibraryPortal() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="material-symbols-outlined">local_library</span>
          <h1>Library Portal</h1>
        </div>
        <div className="header-actions">
          <span className="material-symbols-outlined">notifications</span>
          <img
            className="avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXZlWwKhwhpSBXK1OQvODYBK1f8WTKcv9ooE6342zGtCD8Q_GgHoBVfFD8XOBN6gXZhcvm1Edk8IFA6YqOtXJtArChX5A8EcFQCnGB3qGuhlpGzcVMr-LExkDBhSEB6kG-XAJdQZdAMvgmYiPNz4wnEErOMDHW31WUHvDUPCfPfW7ISbFTYGbtpEyJfUpgRH6D7uyFyuiz_Me7EqOmL4QCqrN_mnwME7aZaN12Z_JOet-S8W9gQXq9_yYHFU9a5WCIDcrs6H3nNNvA"
            alt="user"
          />
        </div>
      </header>

      {/* Layout */}
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav>
            <a href="#" className="active">
              <span className="material-symbols-outlined">group</span> Students
            </a>
            <a href="#">
              <span className="material-symbols-outlined">auto_stories</span> Books
            </a>
            <a href="#">
              <span className="material-symbols-outlined">badge</span> Staff
            </a>
            <a href="#">
              <span className="material-symbols-outlined">settings</span> Settings
            </a>
            <a href="#">
              <span className="material-symbols-outlined">logout</span> Logout
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main">
          <h2 className="page-title">Student Book Management</h2>
          <p className="page-subtitle">
            Search for students by MIS ID and manage their borrowed books.
          </p>

          {/* Search Card */}
          <div className="card">
            <h3>Search Student</h3>
            <div className="row">
              <input type="text" placeholder="Enter Student MIS ID..." />
              <button className="btn primary">Search</button>
            </div>
          </div>

          {/* Manage Books */}
          <div className="card">
            <h3>Manage Books</h3>
            <div className="row">
              <select>
                <option>Select a book to issue</option>
                <option>Pride and Prejudice</option>
                <option>To Kill a Mockingbird</option>
                <option>The Great Gatsby</option>
              </select>
              <button className="btn success">Issue</button>
            </div>
          </div>

          {/* Student Details */}
          <div className="card">
            <h3>Student Details</h3>
            <div className="details-grid">
              <div><strong>Name:</strong> Olivia Bennett</div>
              <div><strong>MIS ID:</strong> 1002</div>
              <div><strong>Class:</strong> 10th Grade</div>
              <div><strong>Contact:</strong> +1 234 567 890</div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Book Title</th>
                  <th>Issue Date</th>
                  <th>Due Date</th>
                  <th>Fine</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pride and Prejudice</td>
                  <td>2024-07-20</td>
                  <td>2024-08-20</td>
                  <td className="red">$5.00</td>
                  <td><span className="status overdue">Overdue</span></td>
                  <td><button className="btn return">Return</button></td>
                </tr>
                <tr>
                  <td>To Kill a Mockingbird</td>
                  <td>2024-07-25</td>
                  <td>2024-08-25</td>
                  <td>$0.00</td>
                  <td><span className="status issued">Issued</span></td>
                  <td><button className="btn return">Return</button></td>
                </tr>
                <tr>
                  <td>The Great Gatsby</td>
                  <td>2024-07-30</td>
                  <td>2024-08-30</td>
                  <td>$0.00</td>
                  <td><span className="status returned">Returned</span></td>
                  <td><button className="btn disabled">Return</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LibraryPortal;


_________________________________________________________css
/* Layout */
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Inter, sans-serif;
  background: #f9fafb;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1d61d4;
  color: white;
  padding: 0 20px;
  height: 60px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

/* Sidebar + Main layout */
.layout {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 220px;
  background: white;
  border-right: 1px solid #e5e7eb;
  padding: 20px;
}

.sidebar nav a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  color: #374151;
  text-decoration: none;
  font-size: 14px;
}

.sidebar nav a.active,
.sidebar nav a:hover {
  background: #eff6ff;
  color: #1d4ed8;
}

.main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.page-title {
  font-size: 22px;
  font-weight: bold;
}

.page-subtitle {
  color: #6b7280;
  margin-bottom: 20px;
}

/* Cards */
.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.row {
  display: flex;
  gap: 10px;
}

input, select {
  flex: 1;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

/* Buttons */
.btn {
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.btn.primary { background: #1d61d4; color: white; }
.btn.primary:hover { background: #17428e; }

.btn.success { background: #059669; color: white; }
.btn.success:hover { background: #047857; }

.btn.return { color: #1d61d4; background: transparent; }
.btn.return:hover { color: #17428e; }

.btn.disabled { color: #9ca3af; cursor: not-allowed; background: transparent; }

/* Table */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.table th, .table td {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #e5e7eb;
}

.red { color: #dc2626; }

/* Status Badges */
.status {
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
}

.status.overdue { background: #fee2e2; color: #b91c1c; }
.status.issued { background: #dbeafe; color: #1e40af; }
.status.returned { background: #dcfce7; color: #166534; }
