import React from "react";
import { PiEye } from "react-icons/pi";
import { FaTrash } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(null);

  const cards = [
    { title: "Total Applications", value: "1250" },
    { title: "Pending", value: "350" },
    { title: "Approved", value: "700" },
    { title: "Rejected", value: "200" },
    { title: "Seats Filled", value: "700/1000" },
  ];

  const applications = [
    { id: "1023457", name: "Aarav Sharma", course: "CSE(BTECH)", status: "Approved", color: "green" },
    { id: "1023489", name: "Ananya Mehta", course: "CSE(BTECH)", status: "Rejected", color: "red" },
    { id: "1023526", name: "Rohan Kapoor", course: "CSE(BTECH)", status: "Pending", color: "purple" },
    { id: "1023562", name: "Priya Nair", course: "CSE(BTECH)", status: "Approved", color: "green" },
    { id: "1023598", name: "Kavya Iyer", course: "CSE(BTECH)", status: "Pending", color: "purple" },
  ];

  const getStatusClass = (color) => {
    const map = {
      green: "status-green",
      yellow: "status-yellow",
      red: "status-red",
      purple: "status-purple",
      cyan: "status-cyan",
    };
    return map[color] || "status-default";
  };

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <div className="dashboard">
      <main className="main-content">
        {/* Admissions Overview */}
        <div className="overview">
          <h2>Admissions Overview</h2>
        </div>

        {/* Cards */}
        <div className="cards">
          {cards.map((card) => (
            <div key={card.title} className="card">
              <p className="card-title">{card.title}</p>
              <p className="card-value">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Applications Table */}
        <div className="table-container">
          <table className="applications-table">
            <thead>
              <tr>
                <th>Application ID</th>
                <th>Student Name</th>
                <th>Course/Program</th>
                <th>Admission Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.id}</td>
                  <td>{app.name}</td>
                  <td>{app.course}</td>
                  <td>
                    <span className={`status ${getStatusClass(app.color)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button
                      className="action-btn"
                      onClick={() => toggleDropdown(app.id)}
                    >
                      ⋮
                    </button>
                    {dropdownOpen === app.id && (
                      <div className="dropdown-vertical">
                        <button className="icon-btn view-btn">
                          <PiEye size={18} />
                        </button>
                        <button className="icon-btn delete-btn">
                          <FaTrash size={16} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <p>Showing 1 to 5 of 1250 results</p>
            <div className="pagination-buttons">
              <button>Previous</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;










//css code
/* Root colors */
:root {
  --primary: #3b82f6;
  --secondary-50: #f8fafc;
  --secondary-200: #e2e8f0;
  --secondary-500: #64748b;
  --secondary-800: #1e293b;
}

/* Layout */
.dashboard {
  font-family: "Inter", sans-serif;
  background-color: var(--secondary-50);
  min-height: 100vh;
  padding: 2rem;
}

.main-content {
  width: 100%;
}

/* Admissions Overview heading */
.overview {
  margin-bottom: 1.5rem;
}

.overview h2 {
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--secondary-800);
}

/* Cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.card {
  background: #fff;
  border: 1px solid var(--secondary-200);
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  min-width: 150px;
}

.card-title {
  font-size: 0.875rem;
  color: var(--secondary-500);
  margin-bottom: 0.5rem;
}

.card-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--secondary-800);
}

/* Table */
.table-container {
  background: #fff;
  border: 1px solid var(--secondary-200);
  border-radius: 8px;
  overflow-x: auto;
  padding: 1rem;
}

.applications-table {
  width: 100%;
  border-collapse: collapse;
}

.applications-table th,
.applications-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--secondary-200);
}

.applications-table th {
  font-size: 0.75rem;
  font-weight: bold;
  color: var(--secondary-500);
}

.applications-table td {
  color: var(--secondary-800);
}

/* Status badges */
.status {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
}

.status-green { background-color: #d1fae5; color: #065f46; }
.status-yellow { background-color: #fef3c7; color: #78350f; }
.status-red { background-color: #fee2e2; color: #991b1b; }
.status-purple { background-color: #ede9fe; color: #5b21b6; }
.status-cyan { background-color: #cffafe; color: #0c4a6e; }
.status-default { background-color: #f3f4f6; color: #374151; }

/* Actions */
.action-cell {
  position: relative;
}

.action-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--secondary-500);
}

.action-btn:hover {
  color: var(--secondary-800);
}

/* Dropdown vertical */
.dropdown-vertical {
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid var(--secondary-200);
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  z-index: 10;
  min-width: 40px;
}

.icon-btn {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #f3f4f6;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.icon-btn:hover {
  background-color: var(--secondary-50);
}

.view-btn {
  color: #065f46;
}

.delete-btn {
  color: #991b1b;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--secondary-500);
}

.pagination-buttons button {
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--secondary-200);
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
}

.pagination-buttons button:hover {
  background: var(--secondary-50);
}

/* Row hover */
.applications-table tr:hover {
  background-color: var(--secondary-50);
}
