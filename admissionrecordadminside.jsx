import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const cards = [
    { title: "Total Applications", value: "1250" },
    { title: "Pending", value: "350" },
    { title: "Approved", value: "700" },
    { title: "Rejected", value: "200" },
    { title: "Seats Filled", value: "700/1000" },
  ];

  const applications = [
    { id: "112415001", name: "Aarav Sharma", course: "CSE(BTECH)", status: "Approved", color: "green" },
    { id: "112415002", name: "Ananya Mehta", course: "CSE(BTECH)", status: "Under Review", color: "yellow" },
    { id: "112415003", name: "Rohan Kapoor", course: "CSE(BTECH)", status: "Pending Documents", color: "purple" },
    { id: "112415004", name: "Priya Nair", course: "CSE(BTECH)", status: "Rejected", color: "red" },
    { id: "112415005", name: "Kavya Iyer", course: "CSE(BTECH)", status: "Applied", color: "cyan" },
    
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

  return (
    <div className="dashboard">
      <main className="main-content">
        {/* Admissions Overview Heading */}
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
                <th>MIS No</th>
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
                  <td>
                    <button className="action-btn">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <p>Showing 1 to 8 of 1250 results</p>
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






//css
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
/* Admissions Overview heading */
.overview {
  margin-bottom: 1.5rem;
}

.overview h2 {
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--secondary-800);
}

