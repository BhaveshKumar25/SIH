import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./theme.css";

const Dashboard = () => {
  const chartRef = useRef(null); // reference for the canvas
  const chartInstance = useRef(null); // store Chart instance

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // destroy previous chart if exists
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Algorithms", "COA", "TOC", "DBMS", "Python", "Probability"],
        datasets: [
          {
            label: "Attendance %",
            data: [85, 92, 78, 88, 95, 82],
            backgroundColor: [
              "#2563eb",
              "#10b981",
              "#f59e0b",
              "#6366f1",
              "#ef4444",
              "#14b8a6",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: 100, title: { display: true, text: "Percentage %" } },
          x: { title: { display: true, text: "Courses" } },
        },
      },
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <span className="material-symbols-outlined icon">school</span>
          <h1>IIIT College ERP</h1>
        </div>
        <div className="nav-right">
          <button className="notification-btn">
            <span className="material-symbols-outlined icon">notifications</span>
            <span className="badge">5</span>
          </button>
          <img src="https://via.placeholder.com/32" alt="Profile" className="profile" />
        </div>
      </header>

      {/* Container */}
      <div style={{ display: "flex", paddingTop: "60px" }}>
        {/* Sidebar */}
        <aside className="sidebar">
          <nav>
            <a href="#" className="active">
              <span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
            <a href="#">
              <span className="material-symbols-outlined">assignment</span> Semester Registration
            </a>
            <a href="#">
              <span className="material-symbols-outlined">check_circle</span> Attendance
            </a>
            <a href="#">
              <span className="material-symbols-outlined">book</span> Subjects
            </a>
            <a href="#">
              <span className="material-symbols-outlined">payments</span> Payments
            </a>
          </nav>
        </aside>

        {/* Main */}
        <main className="main">
          {/* Attendance */}
          <section className="section">
            <h3>📊 Attendance Tracker</h3>
            <div style={{ maxWidth: "600px", margin: "auto" }}>
              <canvas ref={chartRef}></canvas>
            </div>
          </section>

          {/* Courses Table */}
          <section className="section">
            <h3>📚 Semester III Courses & Faculty</h3>
            <div style={{ overflowX: "auto" }}>
              <table>
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Faculty Name</th>
                    <th>Course Title</th>
                    <th>Hours per week (L-T-P)</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Dr. Sharma</td>
                    <td>Analysis & Design of Algorithm</td>
                    <td style={{ textAlign: "center" }}>3-0-2</td>
                    <td style={{ textAlign: "center" }}>4</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Prof. Reddy</td>
                    <td>Computer Organization and Architecture</td>
                    <td style={{ textAlign: "center" }}>3-0-0</td>
                    <td style={{ textAlign: "center" }}>3</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Dr. Gupta</td>
                    <td>Theory of Computation</td>
                    <td style={{ textAlign: "center" }}>3-0-0</td>
                    <td style={{ textAlign: "center" }}>3</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Prof. Khan</td>
                    <td>Database Management System</td>
                    <td style={{ textAlign: "center" }}>3-0-2</td>
                    <td style={{ textAlign: "center" }}>4</td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td>Dr. Mehta</td>
                    <td>Python Programming</td>
                    <td style={{ textAlign: "center" }}>3-0-2</td>
                    <td style={{ textAlign: "center" }}>4</td>
                  </tr>
                  <tr>
                    <td>6.</td>
                    <td>Prof. Iyer</td>
                    <td>Probability and Random Process</td>
                    <td style={{ textAlign: "center" }}>3-0-0</td>
                    <td style={{ textAlign: "center" }}>3</td>
                  </tr>
                </tbody>
                <tfoot style={{ background: "#f3f6fb" }}>
                  <tr>
                    <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>Total Credits</td>
                    <td style={{ textAlign: "center", fontWeight: "bold" }}>21</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
_____________________________css
/* =========================
   THEME VARIABLES
   ========================= */
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  --color-secondary: #1e3a8a;
  --color-danger: #ef4444;
  --color-danger-dark: #dc2626;
  --color-bg: #f3f6fb;
  --color-white: #ffffff;
  --color-text: #2d3748;
  --color-muted: #64748b;

  --radius: 10px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 3px 8px rgba(0,0,0,0.12);

  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;

  --font-main: 'Manrope', sans-serif;
}

/* =========================
   GLOBAL RESET
   ========================= */
body, html {
  margin: 0;
  font-family: var(--font-main);
  background: var(--color-bg);
  color: var(--color-text);
}

/* =========================
   NAVBAR
   ========================= */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 60px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-dark));
  color: var(--color-white);
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 var(--space-md);
  box-shadow: var(--shadow-md);
  z-index: 100;
}
.nav-left { display: flex; align-items: center; gap: var(--space-sm); }
.nav-left h1 { font-size: 18px; font-weight: 700; }
.icon { color: var(--color-white); font-size: 22px; }
.nav-right { display: flex; align-items: center; gap: var(--space-lg); }
.profile { border-radius: 50%; border: 2px solid var(--color-white); cursor: pointer; }
.notification-btn { position: relative; background: none; border: none; cursor: pointer; color: var(--color-white); }
.badge {
  position: absolute; top: -5px; right: -5px;
  background: var(--color-danger); color: var(--color-white);
  font-size: 12px; padding: 2px 6px; border-radius: 50%;
}

/* =========================
   SIDEBAR
   ========================= */
.sidebar {
  width: 220px;
  background: var(--color-white);
  border-right: 1px solid #e5e7eb;
  min-height: calc(100vh - 60px);
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
}
.sidebar nav { display: flex; flex-direction: column; gap: var(--space-sm); }
.sidebar a {
  padding: 10px 12px;
  border-radius: var(--radius);
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: 0.3s;
}
.sidebar a:hover { background: #e0f2fe; color: var(--color-primary-dark); }
.sidebar a.active { background: var(--color-primary); color: var(--color-white); font-weight: 600; }

/* =========================
   MAIN CONTAINER
   ========================= */
.main {
  flex: 1;
  padding: var(--space-lg);
  margin-left: 220px;
}
.main h2 {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: var(--space-lg);
}

/* =========================
   SECTION
   ========================= */
.section {
  background: var(--color-white);
  border: 1px solid #e5e7eb;
  border-radius: var(--radius);
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--space-md);
  transition: 0.2s;
}
.section:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.section h3 {
  margin-top: 0;
  font-size: 18px;
  margin-bottom: var(--space-md);
  color: var(--color-primary);
}

/* =========================
   TABLE
   ========================= */
table { width: 100%; border-collapse: collapse; }
thead { background: #f3f6fb; }
th, td { padding: 10px; border: 1px solid #e5e7eb; text-align: left; }
th { font-weight: 600; }

/* =========================
   RESPONSIVE
   ========================= */
@media(max-width:768px){
  .main { margin-left:0; padding: var(--space-md);}
  .sidebar { display:none;}
}
