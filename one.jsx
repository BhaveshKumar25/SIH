import React, { useState } from "react";
import {
  Bed,
  Plus,
  Pencil,
  Bell,
  User as UserIcon,
  Home,
  Book,
  Settings,
  LogOut,
  FileText,
  CreditCard,
  Calendar,
  Trash2,
  Ban,
} from "lucide-react";

const MENU_ITEMS = [
  { name: "Profile", icon: <UserIcon size={20} /> },
  { name: "Hostel Occupancy Tracking", icon: <Home size={20} /> },
  { name: "Hostel Form", icon: <FileText size={20} /> },
  { name: "Semester Registration", icon: <Calendar size={20} /> },
  { name: "Exam Registration", icon: <Calendar size={20} /> },
  { name: "Fee Payment", icon: <CreditCard size={20} /> },
  { name: "Library Record", icon: <Book size={20} /> },
  { name: "Result", icon: <FileText size={20} /> },
];

const BOTTOM_ITEMS = [
  { name: "Settings", icon: <Settings size={20} /> },
  { name: "LogOut", icon: <LogOut size={20} /> },
];

const INITIAL_ROOMS = {
  "Galaxy Hostel": {
    "Floor 1": [
      { id: 101, status: "occupied", name: "Alex B." },
      { id: 102, status: "vacant", name: "" },
      { id: 103, status: "vacant", name: "" },
      { id: 104, status: "occupied", name: "Sophia L." },
      { id: 105, status: "cleaning", name: "" },
      { id: 106, status: "vacant", name: "" },
      { id: 107, status: "maintenance", name: "" },
      { id: 108, status: "occupied", name: "Lucas" },
    ],
  },
};

const HostelOccupancyTracking = () => {
  const [rooms, setRooms] = useState(INITIAL_ROOMS);
  const [selectedHostel] = useState("Galaxy Hostel");
  const [selectedFloor, setSelectedFloor] = useState("Floor 1");

  const bookRoom = (roomId) => {
    const studentName = prompt("Enter student name:");
    if (!studentName) return;
    setRooms((prev) => ({
      ...prev,
      [selectedHostel]: {
        ...prev[selectedHostel],
        [selectedFloor]: prev[selectedHostel][selectedFloor].map((room) =>
          room.id === roomId ? { ...room, status: "occupied", name: studentName } : room
        ),
      },
    }));
  };

  const toggleStatus = (roomId) => {
    setRooms((prev) => ({
      ...prev,
      [selectedHostel]: {
        ...prev[selectedHostel],
        [selectedFloor]: prev[selectedHostel][selectedFloor].map((room) =>
          room.id === roomId
            ? {
                ...room,
                status:
                  room.status === "occupied"
                    ? "vacant"
                    : room.status === "vacant"
                    ? "occupied"
                    : room.status,
                name: room.status === "occupied" ? "" : "Unknown",
              }
            : room
        ),
      },
    }));
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">IIIT Portal</h2>
        <ul className="menu">
          {MENU_ITEMS.map((item, idx) => (
            <li key={idx} className="menu-item">
              {item.icon} <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <ul className="menu bottom">
          {BOTTOM_ITEMS.map((item, idx) => (
            <li key={idx} className="menu-item">
              {item.icon} <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content area */}
      <div className="main">
        {/* Top Navbar */}
        <header className="navbar">
          <h1>🌟 IIIT Pune College Portal</h1>
          <div className="nav-right">
            <Bell size={22} />
            <img src="https://i.pravatar.cc/40" alt="profile" className="profile-pic" />
          </div>
        </header>

        {/* Page Content */}
        <main className="content">
          <div className="header">
            <h2>Live Occupancy Tracking</h2>
            <p>Last Updated: 10:30 AM</p>
          </div>

          {/* Floor Tabs */}
          <div className="floors">
            {Object.keys(rooms[selectedHostel]).map((floor) => (
              <button
                key={floor}
                className={selectedFloor === floor ? "active" : ""}
                onClick={() => setSelectedFloor(floor)}
              >
                {floor}
              </button>
            ))}
          </div>

          <div className="layout">
            {/* Rooms */}
            <div className="rooms">
              {rooms[selectedHostel][selectedFloor].map((room) => (
                <div
                  key={room.id}
                  onClick={() =>
                    room.status === "vacant"
                      ? bookRoom(room.id)
                      : toggleStatus(room.id)
                  }
                  className={`room ${room.status}`}
                >
                  {room.status === "cleaning" ? (
                    <Trash2 size={20} />
                  ) : room.status === "maintenance" ? (
                    <Ban size={28} />
                  ) : (
                    <Bed size={28} />
                  )}
                  <p>{room.id}</p>
                  {room.status === "occupied" && room.name && (
                    <div className="overlay">{room.name}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Rightbar */}
            <aside className="rightbar">
              <section>
                <h3>Quick Actions</h3>
                <button
                  className="btn primary"
                  onClick={() => {
                    const firstVacant = rooms[selectedHostel][selectedFloor].find(
                      (r) => r.status === "vacant"
                    );
                    if (firstVacant) bookRoom(firstVacant.id);
                    else alert("No vacant rooms.");
                  }}
                >
                  <Plus size={18} /> Book
                </button>
                <button
                  className="btn secondary"
                  onClick={() => {
                    const firstRoom = rooms[selectedHostel][selectedFloor][0];
                    toggleStatus(firstRoom.id);
                  }}
                >
                  <Pencil size={18} /> Change Status
                </button>
              </section>

              <hr />

              <section>
                <h4>Occupancy Legend</h4>
                <div className="legend">
                  <div><span className="dot green"></span> Vacant</div>
                  <div><span className="dot red"></span> Occupied</div>
                  <div><span className="dot yellow"></span> Cleaning</div>
                  <div><span className="dot gray"></span> Maintenance</div>
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>

      {/* CSS */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        .app {
          display: flex;
          height: 100vh;
          background: #f8fbff;
          font-family: "Inter", sans-serif;
          color: #1e293b;
        }
        .sidebar {
          width: 230px;
          background: white;
          border-right: 1px solid #e0e7ff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          overflow-y: auto;
        }
        .logo {
          font-size: 18px;
          font-weight: 700;
          padding: 16px 20px;
          color: #2563eb;
        }
        .menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          cursor: pointer;
          color: #475569;
        }
        .menu-item:hover {
          background: #eff6ff;
          color: #2563eb;
        }
        .main {
          flex: 1;
          margin-left: 230px;
          display: flex;
          flex-direction: column;
        }
        .navbar {
          background: #e0f0ff;
          padding: 14px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #dbeafe;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .navbar h1 {
          font-size: 20px;
          font-weight: 700;
          color: #1e3a8a;
        }
        .nav-right {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        .profile-pic {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #3b82f6;
        }
        .content {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
        }
        .header h2 {
          font-size: 24px;
          margin-bottom: 4px;
        }
        .floors {
          display: flex;
          gap: 10px;
          margin: 16px 0;
        }
        .floors button {
          background: none;
          border: none;
          font-size: 14px;
          padding: 6px 10px;
          border-bottom: 2px solid transparent;
          cursor: pointer;
        }
        .floors button.active {
          color: #2563eb;
          border-bottom: 2px solid #2563eb;
        }
        .layout {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 20px;
        }
        .rooms {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          gap: 14px;
        }
        .room {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          height: 110px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
        }
        .room.occupied { background: #fee2e2; border-color: #f87171; color: #b91c1c; }
        .room.vacant { background: #ecfdf5; border-color: #86efac; color: #166534; }
        .room.cleaning { background: #fef9c3; border-color: #facc15; color: #92400e; }
        .room.maintenance { background: #f1f5f9; border-color: #cbd5e1; color: #475569; }
        .overlay {
          position: absolute;
          bottom: 6px;
          font-size: 12px;
          font-weight: 600;
        }
        .rightbar {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          height: fit-content;
        }
        .btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          margin-bottom: 10px;
        }
        .btn.primary { background: #3b82f6; color: white; }
        .btn.secondary { background: #f1f5f9; }
        .legend {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .dot {
          width: 12px;
          height: 12px;
          display: inline-block;
          border-radius: 50%;
          margin-right: 8px;
        }
        .dot.green { background: #22c55e; }
        .dot.red { background: #ef4444; }
        .dot.yellow { background: #facc15; }
        .dot.gray { background: #94a3b8; }
      `}</style>
    </div>
  );
};

export default HostelOccupancyTracking;
