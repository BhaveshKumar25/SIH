import React, { useState } from "react";

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

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
      red: "status-red",
      purple: "status-purple",
      yellow: "status-yellow",
      cyan: "status-cyan",
    };
    return map[color] || "status-default";
  };

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const sidebarItems = [
    "Profile",
    "Hostel Occupancy",
    "Hostel Form",
    "Semester Registration",
    "Exam Registration",
    "Fee Payment",
    "Library Record",
    "Result",
  ];

  const bottomItems = ["Settings", "Logout"];

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Dashboard</div>
        <ul className="menu">
          {sidebarItems.map((item, idx) => (
            <li key={idx} className="menu-item">{item}</li>
          ))}
        </ul>
        <ul className="menu bottom">
          {bottomItems.map((item, idx) => (
            <li key={idx} className="menu-item">{item}</li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <div className="main">
        {/* Navbar */}
        <div className="navbar">
          <span className="navbar-title">Admissions Dashboard</span>
          <div className="navbar-right">
            <span className="notification">🔔</span>
            <span className="profile">👤 Admin</span>
          </div>
        </div>

        {/* Page Heading */}
        <div className="page-heading">
          <h2>Admissions Overview</h2>
        </div>

        {/* Cards */}
        <div className="cards">
          {cards.map((card) => (
            <div key={card.title} className="card">
              <div className="card-title">{card.title}</div>
              <div className="card-value">{card.value}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Status</th>
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
                    <span className={status ${getStatusClass(app.color)}}>
                      {app.status}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button className="action-btn" onClick={() => toggleDropdown(app.id)}>⋮</button>
                    {dropdownOpen === app.id && (
                      <div className="dropdown">
                        <button className="view-btn">👁</button>
                        <button className="delete-btn">🗑</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <span>Showing 1 to 5 of 1250 results</span>
            <div>
              <button>Previous</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        /* Root colors */
        :root {
          --primary: #3b82f6;
          --light: #f9fafb;
          --dark: #1e293b;
          --gray: #64748b;
          --white: #ffffff;
        }

        /* Container */
        .container {
          display: flex;
          font-family: "Inter", sans-serif;
        }

        /* Sidebar */
        .sidebar {
          width: 220px;
          background: var(--primary);
          color: var(--white);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          padding: 1rem 0;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1rem;
        }
        .menu { list-style: none; padding: 0; margin: 0; }
        .menu-item { padding: 0.8rem 1.5rem; cursor: pointer; transition: background 0.2s; }
        .menu-item:hover { background: rgba(255, 255, 255, 0.2); }
        .bottom { margin-top: auto; }

        /* Main content */
        .main {
          flex: 1;
          background: var(--light);
          padding: 1.5rem 2rem;
          min-height: 100vh;
        }

        /* Navbar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--white);
          padding: 0.5rem 1.5rem; /* Slimmer navbar */
          border-radius: 8px;
          margin-bottom: 1rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }
        .navbar-title { font-weight: bold; color: var(--dark); }
        .navbar-right span { margin-left: 1rem; cursor: pointer; font-size: 0.9rem; }

        /* Page heading */
        .page-heading { margin-bottom: 1rem; }
        .page-heading h2 { font-size: 1.25rem; font-weight: bold; color: var(--dark); }

        /* Cards */
        .cards {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .card {
          background: var(--white);
          padding: 1rem;
          border-radius: 8px;
          flex: 1;
          min-width: 150px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .card-title { color: var(--gray); font-size: 0.9rem; margin-bottom: 0.5rem; }
        .card-value { color: var(--dark); font-size: 1.5rem; font-weight: bold; }

        /* Table */
        .table-container {
          background: var(--white);
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 0.75rem; text-align: left; }
        th { color: var(--gray); font-size: 0.85rem; }
        td { color: var(--dark); }
        tr:hover { background: #f1f5f9; }

        /* Status badges */
        .status { padding: 0.2rem 0.6rem; border-radius: 999px; font-size: 0.75rem; font-weight: 500; }
        .status-green { background: #d1fae5; color: #065f46; }
        .status-red { background: #fee2e2; color: #991b1b; }
        .status-purple { background: #ede9fe; color: #5b21b6; }
        .status-yellow { background: #fef3c7; color: #78350f; }
        .status-cyan { background: #cffafe; color: #0c4a6e; }

        /* Actions */
        .action-cell { position: relative; }
        .action-btn { background: transparent; border: none; cursor: pointer; font-size: 1.2rem; }
        .dropdown { position: absolute; top: 100%; right: 0; background: var(--white); border: 1px solid #e5e7eb; border-radius: 6px; display: flex; flex-direction: column; z-index: 10; }
        .dropdown button { padding: 0.4rem 0.6rem; border: none; background: transparent; cursor: pointer; font-size: 1rem; }
        .dropdown button:hover { background: #f1f5f9; }

        /* Pagination */
        .pagination { display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; color: var(--gray); font-size: 0.85rem; }
        .pagination button { margin-left: 0.5rem; padding: 0.3rem 0.6rem; border: 1px solid #e5e7eb; border-radius: 4px; background: var(--white); cursor: pointer; }
        .pagination button:hover { background: #f1f5f9; }
      `}</style>
    </div>
  );
};

export default App;
