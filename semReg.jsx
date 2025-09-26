import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [paymentMode, setPaymentMode] = useState("");
  const [residentialStatus, setResidentialStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your form has been submitted!");
    setPaymentMode("");
    setResidentialStatus("");
    e.target.reset();
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <span className="material-symbols-outlined icon">school</span>
          <h1>IIIT College ERP</h1>
        </div>
        <div className="nav-right">
          <button className="notification-btn">
            <span className="material-symbols-outlined">notifications</span>
            <span className="badge">3</span>
          </button>
          <img src="https://via.placeholder.com/32" alt="Profile" className="profile" />
        </div>
      </header>

      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav>
            <a href="#">Dashboard</a>
            <a href="#" className="active">Semester Registration</a>
            <a href="#">Attendance</a>
            <a href="#">Subjects</a>
            <a href="#">Payments</a>
          </nav>
        </aside>

        {/* Main */}
        <main className="main">
          <h2>Semester Registration</h2>

          <form onSubmit={handleSubmit} className="form">
            {/* Student Details */}
            <section className="section">
              <h3>Student Details</h3>
              <div className="grid">
                <label>
                  Scholar No
                  <input type="text" required placeholder="Enter Scholar Number" />
                </label>
                <label>
                  Student Name
                  <input type="text" required placeholder="Enter Full Name" />
                </label>
                <label>
                  Father Name
                  <input type="text" required placeholder="Enter Father's Name" />
                </label>
                <label>
                  Category
                  <input type="text" placeholder="Enter your Category" />
                </label>
                <label>
                  Contact No
                  <input type="text" required placeholder="+91 ..." />
                </label>
                <label>
                  Email ID
                  <input type="email" required placeholder="......@gmail.com" />
                </label>
                <label>
                  Program / Degree
                  <select required>
                    <option value="">Select Program</option>
                    <option>B.Tech</option>
                    <option>M.Tech</option>
                    <option>Ph.D.</option>
                  </select>
                </label>
                <label>
                  Branch / Department
                  <input type="text" placeholder="Enter Branch / Department" />
                </label>
                <label>
                  Semester
                  <select required>
                    <option value="">Select Semester</option>
                    {[1,2,3,4,5,6,7,8].map(s=>(
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Academic Year
                  <input type="text" required placeholder="2025-20**" />
                </label>
                <label>
                  Academic Session
                  <select required>
                    <option value="">Select</option>
                    <option>Odd</option>
                    <option>Even</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Residential Details */}
            <section className="section">
              <h3>Residential Details</h3>
              <label>
                Residential Status
                <select value={residentialStatus} onChange={(e)=>setResidentialStatus(e.target.value)} required>
                  <option value="">Select</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Day Scholar">Day Scholar</option>
                </select>
              </label>
              {residentialStatus==="Hostel" && (
                <div className="grid">
                  <label>
                    Hostel Name
                    <input type="text" placeholder="Enter Hostel Name" />
                  </label>
                  <label>
                    Hostel Room
                    <input type="text" placeholder="Enter Room Number" />
                  </label>
                </div>
              )}
              {residentialStatus==="Day Scholar" && (
                <label>
                  House Address
                  <textarea placeholder="Enter your full address"></textarea>
                </label>
              )}
            </section>

            {/* Payment Details */}
            <section className="section">
              <h3>Payment Details</h3>
              <div className="grid">
                <label>
                  Payment Mode
                  <select value={paymentMode} onChange={(e)=>setPaymentMode(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="icollect">I-Collect</option>
                    <option value="utr">UTR</option>
                  </select>
                </label>
                <label>
                  Amount
                  <input type="number" required placeholder="Enter Amount" />
                </label>
                {paymentMode==="icollect" && (
                  <label>
                    I-Collect No
                    <input type="text" placeholder="Enter I-Collect Number" />
                  </label>
                )}
                {paymentMode==="utr" && (
                  <label>
                    UTR No
                    <input type="text" placeholder="Enter UTR Number" />
                  </label>
                )}
                <label>
                  Payment Date
                  <input type="date" required />
                </label>
              </div>
            </section>

            {/* Buttons */}
            <div className="buttons">
              <button type="reset" className="btn cancel">Cancel</button>
              <button type="submit" className="btn submit">Submit</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
_____________________________________________________________________________css
body, html {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  background: #f3f6fb;
  color: #2d3748;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 60px;
  background: linear-gradient(90deg, #2563eb, #1e40af);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 100;
}
.nav-left {
  display: flex; align-items: center; gap: 10px;
}
.nav-left h1 { font-size: 18px; font-weight: 700; }
.icon { color: #fff; font-size: 24px; }
.nav-right { display: flex; align-items: center; gap: 20px; }
.profile { border-radius: 50%; border: 2px solid #fff; cursor: pointer; }
.notification-btn { position: relative; background: none; border: none; cursor: pointer; color: #fff; }
.badge {
  position: absolute; top: -5px; right: -5px;
  background: #f87171; color: #fff; font-size: 12px;
  padding: 2px 6px; border-radius: 50%;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
}

/* Layout */
.container {
  display: flex;
  padding-top: 60px;
}
.sidebar {
  width: 220px;
  background: #fff;
  border-right: 1px solid #e2e8f0;
  min-height: calc(100vh - 60px);
  padding: 20px;
  box-shadow: 2px 0 6px rgba(0,0,0,0.05);
}
.sidebar nav { display: flex; flex-direction: column; gap: 10px; }
.sidebar a {
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: 0.3s;
}
.sidebar a:hover { background: #e0f2fe; color: #1e40af; }
.sidebar a.active { background: #2563eb; color: #fff; font-weight: 600; }

.main {
  flex: 1;
  padding: 25px;
}
.main h2 {
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 25px;
}

/* Form */
.form { display: flex; flex-direction: column; gap: 25px; }
.section {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}
.section:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}
.section h3 {
  margin-top: 0;
  font-size: 20px;
  margin-bottom: 15px;
  color: #2563eb;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 15px;
}
label { display: flex; flex-direction: column; font-size: 14px; gap: 6px; }
input, select, textarea {
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  transition: 0.2s;
}
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37,99,235,0.2);
}
textarea { min-height: 90px; }

/* Buttons */
.buttons {
  display: flex; justify-content: flex-end; gap: 12px;
}
.btn {
  padding: 10px 22px;
  border: none; border-radius: 8px;
  font-size: 14px; cursor: pointer;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;
}
.btn:hover { transform: translateY(-1px); }
.cancel { background: #f87171; color: #fff; }
.cancel:hover { background: #dc2626; }
.submit { background: #2563eb; color: #fff; }
.submit:hover { background: #1d4ed8; }
