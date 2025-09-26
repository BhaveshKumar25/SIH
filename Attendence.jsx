
import React, { useState } from "react";
import "./Styles.css";

const studentsData = [
  { roll: "101", name: "Mahitha J V", attendance: "92%" },
  { roll: "102", name: "Avantika R", attendance: "87%" },
  { roll: "103", name: "Rohan K", attendance: "78%" },
];

const AttendanceUpdate = () => {
  const [students, setStudents] = useState(studentsData);

  const markAttendance = (roll, status) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.roll === roll ? { ...s, attendanceStatus: status } : s
      )
    );
  };

  const totalStudents = students.length;
  const presentCount = students.filter(s => s.attendanceStatus === "Present").length;
  const absentCount = totalStudents - presentCount;

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <h1>IIIT College ERP</h1>
        </div>
        <div className="nav-right">
          <button className="notification-btn">
            <span className="material-symbols-outlined icon">notifications</span>
            <span className="badge">5</span>
          </button>
          <div className="profile" style={{ backgroundImage: "url('https://via.placeholder.com/40')" }} />
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <nav>
          <a href="#" className="active"><span className="material-symbols-outlined">dashboard</span> Dashboard</a>
          <a href="#"><span className="material-symbols-outlined">book</span> Subjects</a>
          <a href="#"><span className="material-symbols-outlined">app_registration</span> Semester Registration</a>
          <a href="#"><span className="material-symbols-outlined">payment</span> Fees</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        <div className="section">
          <h3>Attendance Update</h3>

          {/* Filters */}
          <div className="grid">
            <label>
              Program
              <select>
                <option>B.Tech</option>
                <option>M.Tech</option>
                <option>PhD</option>
              </select>
            </label>
            <label>
              Semester
              <select>
                {Array.from({ length: 8 }, (_, i) => <option key={i}>{i + 1}</option>)}
              </select>
            </label>
            <label>
              Branch
              <select>
                <option>CSE</option>
                <option>ECE</option>
              </select>
            </label>
            <label>
              Section
              <select>
                <option>A</option>
                <option>B</option>
              </select>
            </label>
            <label className="col-span-2">
              Subject
              <select>
                <option>Data Structures</option>
                <option>DBMS</option>
                <option>Operating Systems</option>
                <option>Computer Networks</option>
                <option>Machine Learning</option>
              </select>
            </label>
          </div>

          {/* Students Table */}
          <div className="overflow-x-auto mt-4">
            <table className="students-table">
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Attendance %</th>
                  <th>Mark</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.roll}>
                    <td>{s.roll}</td>
                    <td>{s.name}</td>
                    <td>{s.attendance}</td>
                    <td>
                      <button
                        className="btn present"
                        onClick={() => markAttendance(s.roll, "Present")}
                      >
                        Present
                      </button>
                      <button
                        className="btn absent"
                        onClick={() => markAttendance(s.roll, "Absent")}
                      >
                        Absent
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-4 text-muted">
            <p><strong>Staff:</strong> Dr. Suresh</p>
            <p><strong>Date:</strong> 16-09-2025</p>
            <p>
              <strong>Total Students:</strong> {totalStudents} | 
              <strong> Present:</strong> {presentCount} | 
              <strong> Absent:</strong> {absentCount}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AttendanceUpdate;
--------------------------------------------css
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
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
}

.container {
  display: flex;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 60px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-dark));
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-md);
  box-shadow: var(--shadow-md);
  z-index: 100;
}
.nav-left h1 { font-size: 18px; font-weight: 700; }
.nav-right { display: flex; gap: var(--space-lg); }
.profile {
  width: 36px;
  height: 36px;
  background-size: cover;
  border-radius: 50%;
  border: 2px solid var(--color-white);
}
.notification-btn { position: relative; background: none; border: none; cursor: pointer; }
.badge {
  position: absolute; top: -5px; right: -5px;
  background: var(--color-danger); color: var(--color-white);
  font-size: 12px; padding: 2px 6px; border-radius: 50%;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background: var(--color-white);
  border-right: 1px solid #e5e7eb;
  min-height: 100vh;
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
}
.sidebar nav { display: flex; flex-direction: column; gap: var(--space-sm); }
.sidebar a { display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: var(--radius); color: var(--color-text); font-weight: 500; text-decoration: none; transition: 0.3s; }
.sidebar a:hover { background: #e0f2fe; color: var(--color-primary-dark); }
.sidebar a.active { background: var(--color-primary); color: var(--color-white); font-weight: 600; }

/* Main Content */
.main { flex: 1; padding: var(--space-lg); margin-left: 240px; }
.section {
  background: var(--color-white);
  border: 1px solid #e5e7eb;
  border-radius: var(--radius);
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
}
.section h3 { margin-top: 0; margin-bottom: var(--space-md); font-size: 20px; color: var(--color-primary); }

/* Grid & Form */
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-md); }
label { display: flex; flex-direction: column; font-size: 14px; gap: 6px; }
select { padding: 10px; border: 1px solid #cbd5e1; border-radius: var(--radius); font-size: 14px; }
select:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(37,99,235,0.2); }

/* Table */
.students-table { width: 100%; border-collapse: collapse; margin-top: var(--space-md); }
.students-table th, .students-table td { padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: left; }
.students-table th { background: #f8fafc; font-weight: 600; font-size: 14px; text-transform: uppercase; }

/* Buttons */
.btn { padding: 6px 12px; border-radius: var(--radius); font-weight: 600; cursor: pointer; transition: 0.2s; }
.present { background: #10b981; color: var(--color-white); margin-right: 6px; }
.absent { background: var(--color-danger); color: var(--color-white); }
