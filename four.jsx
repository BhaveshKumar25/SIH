import React from "react";
import {
  Home,
  Book,
  User,
  Settings,
  LogOut,
  FileText,
  CreditCard,
  Calendar,
  Bell,
} from "lucide-react";

const resultsData = [
  { mis: "11223344", semester: 1, examType: "Regular", resultDate: "2023-01-15", result: "Pass" },
  { mis: "11223344", semester: 2, examType: "Regular", resultDate: "2023-06-20", result: "Pass" },
  { mis: "11223344", semester: 3, examType: "Regular", resultDate: "2024-01-10", result: "Pass" },
  { mis: "11223344", semester: 4, examType: "Regular", resultDate: "2024-06-18", result: "Fail" },
  { mis: "11223344", semester: 5, examType: "Supplementary", resultDate: "2025-01-12", result: "Pass" },
];

const Result = () => {
  const menuItems = [
    { name: "Profile", icon: <User size={20} /> },
    { name: "Hostel Occupancy", icon: <Home size={20} /> },
    { name: "Hostel Form", icon: <FileText size={20} /> },
    { name: "Semester Registration", icon: <Calendar size={20} /> },
    { name: "Exam Registration", icon: <Calendar size={20} /> },
    { name: "Fee Payment", icon: <CreditCard size={20} /> },
    { name: "Library Record", icon: <Book size={20} /> },
    { name: "Result", icon: <FileText size={20} /> },
  ];

  const bottomItems = [
    { name: "Settings", icon: <Settings size={20} /> },
    { name: "LogOut", icon: <LogOut size={20} /> },
  ];

  return (
    <div className="layout">
      <style>{`
        :root {
          --primary: #3b82f6;
          --primary-dark: #1e40af;
          --background: #f9fafb;
          --foreground: #111827;
          --muted: #e5e7eb;
          --muted-foreground: #6b7280;
          --border: #d1d5db;
          --green: #22c55e;
          --red: #ef4444;
        }
        body, html { margin:0; font-family:'Inter',sans-serif; background: var(--background); color: var(--foreground); }
        .layout { display:flex; min-height:100vh; }

        /* Sidebar */
        .sidebar {
          width: 240px; background:white; border-right:1px solid var(--border);
          display:flex; flex-direction:column; justify-content:space-between;
        }
        .sidebar ul { list-style:none; padding:0; margin:0; }
        .sidebar li { display:flex; align-items:center; gap:10px; padding:12px 16px; cursor:pointer; border-radius:8px; color:var(--muted-foreground); font-weight:500; }
        .sidebar li:hover, .sidebar li.active { background: var(--primary); color:white; }
        .sidebar-footer { margin-bottom:20px; }

        /* Main area */
        .main-area { flex:1; display:flex; flex-direction:column; }

        /* Navbar */
        .navbar { display:flex; justify-content:space-between; align-items:center; background:white; padding:12px 24px; border-bottom:1px solid var(--border); box-shadow:0 2px 4px rgba(0,0,0,0.05); position:sticky; top:0; z-index:10; }
        .navbar-left { display:flex; align-items:center; gap:10px; }
        .college-name { font-size:20px; font-weight:700; color: var(--primary-dark); }
        .navbar-right { display:flex; align-items:center; gap:16px; }
        .icon-btn { border:none; background:none; cursor:pointer; color: var(--primary-dark); font-size:18px; }
        .profile-circle { width:35px; height:35px; background-color: var(--primary); color:white; display:flex; justify-content:center; align-items:center; border-radius:50%; font-weight:600; }

        /* Page content */
        .result-container { flex-grow:1; max-width:1000px; margin:20px auto; padding:0 16px; }

        .header-section { margin-bottom:20px; }
        .header-title { font-size:1.8rem; font-weight:700; color: var(--primary-dark); }
        .header-subtitle { color: var(--muted-foreground); font-size:0.9rem; margin-top:4px; }

        /* Table */
        .table-header { display:grid; grid-template-columns: repeat(6, 1fr); background-color: var(--primary); color:white; font-size:0.75rem; font-weight:600; padding:8px 12px; border-radius:6px 6px 0 0; }
        .result-list { display:flex; flex-direction:column; }
        .result-row { display:grid; grid-template-columns: repeat(6, 1fr); border:1px solid var(--border); padding:8px 12px; align-items:center; border-radius:6px; margin-bottom:4px; background:white; }
        .result-row:hover { box-shadow:0 2px 6px rgba(0,0,0,0.05); }
        .badge { padding:2px 6px; border-radius:12px; font-size:0.7rem; font-weight:600; }
        .badge-pass { background:#dcfce7; color:#166534; }
        .badge-fail { background:#fee2e2; color:#991b1b; }
        .actions { display:flex; gap:6px; justify-content:center; }
        .view-btn { border:1px solid var(--primary); color:var(--primary); background:white; padding:3px 8px; font-size:0.7rem; font-weight:600; border-radius:4px; cursor:pointer; }
        .view-btn:hover { background:#eff6ff; }
        .download-btn { background:var(--primary); color:white; padding:3px 8px; font-size:0.7rem; font-weight:600; border-radius:4px; cursor:pointer; }
        .download-btn:hover { background: var(--primary-dark); }

        @media(max-width:640px){
          .table-header { display:none; }
          .result-row { grid-template-columns:1fr; gap:4px; }
        }
      `}</style>

      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className={item.name === "Result" ? "active" : ""}>
              {item.icon} <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          {bottomItems.map((item) => (
            <li key={item.name}>
              {item.icon} <span>{item.name}</span>
            </li>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <div className="main-area">
        <nav className="navbar">
          <div className="navbar-left">
            <h1 className="college-name">IIIT Pune</h1>
          </div>
          <div className="navbar-right">
            <button className="icon-btn">
              <Bell size={20} />
            </button>
            <div className="profile-circle">M</div>
          </div>
        </nav>

        <div className="result-container">
          <div className="header-section">
            <h1 className="header-title">Results</h1>
            <p className="header-subtitle">
              Access your semester-wise results and download them in PDF format.
            </p>
          </div>

          <div className="table-header">
            <div>MIS No.</div>
            <div>Semester</div>
            <div>Exam Type</div>
            <div>Result Date</div>
            <div>Result</div>
            <div className="text-center">Actions</div>
          </div>

          <div className="result-list">
            {resultsData.map((res, idx) => (
              <div key={idx} className="result-row">
                <div>{res.mis}</div>
                <div>{res.semester}</div>
                <div>{res.examType}</div>
                <div>{res.resultDate}</div>
                <div>
                  <span className={`badge ${res.result === "Pass" ? "badge-pass" : "badge-fail"}`}>
                    {res.result}
                  </span>
                </div>
                <div className="actions">
                  <button className="view-btn">VIEW</button>
                  <button className="download-btn">Download PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
