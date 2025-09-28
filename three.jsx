import React, { useState } from "react";
import { Eye, Trash2, MoreVertical, Bell, LogOut, Home, User, Book, Settings, CreditCard } from "lucide-react";

function FeeRecords() {
  const [activeMenu, setActiveMenu] = useState("Fee Records");
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => setOpenMenuId(openMenuId === id ? null : id);

  const MENU_ITEMS = [
    { name: "Dashboard", icon: <Home size={18} /> },
    { name: "Students", icon: <User size={18} /> },
    { name: "Courses", icon: <Book size={18} /> },
    { name: "Fee Records", icon: <CreditCard size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  const records = [
    { mis: "ACME2023001", name: "Riya Sharma", course: "B.Tech/2023", totalFee: "₹8,00,000", status: "Partial", statusColor: "yellow", credited: "₹5,00,000", debited: "₹3,00,000" },
    { mis: "ACME2023002", name: "Arjun Patel", course: "B.Sc/2023", totalFee: "₹6,50,000", status: "Paid", statusColor: "green", credited: "₹6,50,000", debited: "₹0" },
    { mis: "ACME2023003", name: "Neha Singh", course: "B.A/2023", totalFee: "₹5,20,000", status: "Partial", statusColor: "yellow", credited: "₹3,50,000", debited: "₹1,70,000" },
  ];

  return (
    <div className="layout">
      <style>{`
        :root {
          --primary: #3b82f6;
          --primary-light: #60a5fa;
          --primary-dark: #1e40af;
          --background: #f9fafb;
          --foreground: #111827;
          --muted: #e5e7eb;
          --muted-foreground: #6b7280;
          --border: #d1d5db;
          --yellow: #fbbf24;
          --green: #22c55e;
        }
        body, html { margin:0; font-family:'Inter',sans-serif; background: var(--background); color: var(--foreground); }
        .layout { display:flex; min-height:100vh; }

        /* Sidebar */
        .sidebar {
          width: 240px; background:white; border-right:1px solid var(--border);
          display:flex; flex-direction:column; justify-content:space-between; min-height:100vh;
        }
        .sidebar-header { padding:20px; font-weight:700; font-size:18px; border-bottom:1px solid var(--border); }
        .sidebar-menu { display:flex; flex-direction:column; margin-top:20px; }
        .menu-item { display:flex; align-items:center; gap:8px; padding:12px 16px; margin:4px 8px; border-radius:8px; border:none; cursor:pointer; font-size:14px; color: var(--muted-foreground); }
        .menu-item:hover { background: var(--muted); color: var(--foreground); }
        .menu-item.active { background: var(--primary); color:white; }
        .menu-item.logout { background:#ef4444; color:white; text-align:center; padding:12px; margin:8px; border-radius:6px; }
        .sidebar-footer { padding-bottom:20px; }

        /* Main area */
        .main-area { flex:1; display:flex; flex-direction:column; }

        /* Navbar */
        .navbar { display:flex; justify-content:space-between; align-items:center; background:white; padding:14px 24px; border-bottom:1px solid var(--border); box-shadow:0 2px 4px rgba(0,0,0,0.05); position:sticky; top:0; z-index:10; }
        .navbar-left { display:flex; align-items:center; gap:10px; }
        .navbar-title { font-size:20px; font-weight:700; color: var(--primary-dark); }
        .navbar-right { display:flex; gap:16px; align-items:center; }
        .notification-btn { position:relative; border:none; background:none; cursor:pointer; font-size:18px; }
        .notification-dot { position:absolute; top:2px; right:2px; width:8px; height:8px; border-radius:50%; background: var(--primary); }

        /* Stats Cards */
        .stats-cards { display:flex; flex-wrap:wrap; gap:16px; padding:20px 24px; }
        .card { flex:1; min-width:180px; background:white; padding:16px; border-radius:12px; border:1px solid var(--border); }
        .card p:first-child { font-size:12px; color: var(--muted-foreground); }
        .card p:last-child { font-size:20px; font-weight:600; }

        /* Table */
        .table-container { background:white; margin:20px 24px; border-radius:12px; border:1px solid var(--border); }
        .table-header { display:flex; justify-content:space-between; padding:12px 16px; flex-wrap:wrap; gap:8px; }
        .table-header input { flex:1; min-width:200px; padding:6px 12px; border-radius:8px; border:1px solid var(--border); font-size:14px; }
        .btn-primary { padding:6px 12px; border-radius:8px; border:none; background: var(--primary); color:white; cursor:pointer; }
        .btn-primary:hover { background: var(--primary-dark); }

        .table-scroll { overflow-x:auto; }
        table { width:100%; border-collapse:collapse; font-size:14px; min-width:900px; }
        thead { background: var(--muted); color: var(--muted-foreground); }
        th, td { padding:12px 16px; text-align:left; }
        tbody tr { border-bottom:1px solid var(--border); }
        .status-badge { padding:4px 8px; border-radius:6px; font-size:12px; font-weight:500; }
        .status-badge.yellow { background-color:#fef3c7; color:#b45309; }
        .status-badge.green { background-color:#dcfce7; color:#166534; }

        .actions-cell { position:relative; }
        .action-btn { border:none; background:none; cursor:pointer; color: var(--muted-foreground); }
        .action-btn:hover { color: var(--primary); }
        .action-menu { position:absolute; right:0; top:110%; background:white; border:1px solid var(--border); border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1); display:flex; flex-direction:column; min-width:120px; }
        .menu-item { padding:8px 12px; display:flex; align-items:center; gap:6px; border:none; background:none; cursor:pointer; }
        .menu-item:hover { background: var(--muted); }

        /* Pagination */
        .pagination { display:flex; justify-content:space-between; align-items:center; padding:12px 16px; font-size:12px; color: var(--muted-foreground); }
        .page-btn { padding:6px 12px; border-radius:8px; border:1px solid var(--border); background: var(--background); cursor:pointer; }
        .page-btn:hover { background: var(--muted); }

        /* Responsive fix */
        @media(max-width:900px){ .table-scroll { overflow-x:auto; } }
      `}</style>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">Acme Portal</div>
        <nav className="sidebar-menu">
          {MENU_ITEMS.map((item) => (
            <button key={item.name} className={`menu-item ${activeMenu === item.name ? "active" : ""}`} onClick={() => setActiveMenu(item.name)}>
              {item.icon} <span>{item.name}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="menu-item logout"><LogOut size={18} /> Logout</button>
        </div>
      </aside>

      {/* Main area */}
      <div className="main-area">
        {/* Navbar */}
        <header className="navbar">
          <div className="navbar-left">
            <span className="logo-icon">🎓</span>
            <h2 className="navbar-title">Acme University</h2>
          </div>
          <div className="navbar-right">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
          </div>
        </header>

        {/* Stats */}
        <div className="stats-cards">
          <div className="card"><p>Total Fees Collected</p><p>₹4,50,00,000</p></div>
          <div className="card"><p>Credited Amount</p><p>₹5,00,000</p></div>
          <div className="card"><p>Debited Amount</p><p>₹1,25,000</p></div>
        </div>

        {/* Table */}
        <div className="table-container">
          <div className="table-header">
            <input type="search" placeholder="Search by student, ID, course..." />
            <button className="btn-primary">Filter ⬇️</button>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>MIS</th>
                  <th>Student Name</th>
                  <th>Course</th>
                  <th>Total Fee</th>
                  <th>Status</th>
                  <th>Credited Amount</th>
                  <th>Debited Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((rec) => (
                  <tr key={rec.mis}>
                    <td>{rec.mis}</td>
                    <td>{rec.name}</td>
                    <td>{rec.course}</td>
                    <td>{rec.totalFee}</td>
                    <td><span className={`status-badge ${rec.statusColor}`}>{rec.status}</span></td>
                    <td>{rec.credited}</td>
                    <td>{rec.debited}</td>
                    <td className="actions-cell">
                      <button className="action-btn" onClick={() => toggleMenu(rec.mis)}>
                        <MoreVertical size={20} />
                      </button>
                      {openMenuId === rec.mis && (
                        <div className="action-menu">
                          <button className="menu-item"><Eye size={16} /> View</button>
                          <button className="menu-item"><Trash2 size={16} /> Delete</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <span>Showing 1 to 3 of 10 records</span>
            <div>
              <button className="page-btn">Previous</button>
              <button className="page-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeRecords;
