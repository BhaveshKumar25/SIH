
import React from "react";
import './Admissionrecordstaff.css';

function StudentDetails() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-[Inter,_Noto_Sans,sans-serif]">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-3 text-slate-800">
          <span className="material-symbols-outlined text-[#1173d4] text-3xl">school</span>
          <h2 className="text-lg font-bold">Acme University</h2>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-[#1173d4]">
            Dashboard
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-[#1173d4]">
            Students
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-[#1173d4]">
            Staff
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-[#1173d4]">
            Courses
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-[#1173d4]">
            Finance
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-[#1173d4]">
            Reports
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="relative text-slate-500 hover:text-slate-700">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div
            className="bg-cover bg-center rounded-full w-10 h-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsaslKQyWUvKTLhcyGYa_VD8hAFBYDivo6-NQ5GDjdshwRmx2AWjDeB5DN5NicLzp0qxGzptuusEIeUh2eRPmwKPirEkurSqb-xzt7iq5GL85FmAAlr8kmY7WH_pQvPFNJhYLm6s6yRJjy4rER-P43N3P1Wa07gg0kKNlPG3705Ayw3GrLXfcTONnuIephtoFA1qZ-ZeksMqOkHlpJ2DCfDKAFrKHvgCuy7k7ps7tnHZ6cJ_q2B8KYkspCS10GK2Koh2LgNGiZEjRt')",
            }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Student Details</h1>
            <p className="text-slate-500 mt-1">
              View and manage information for <b>Sophia Clark</b>.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 h-10 border border-slate-300 rounded-md bg-white text-sm font-medium text-slate-700">
              <span className="material-symbols-outlined text-base">print</span>
              Print
            </button>
            <button className="flex items-center gap-2 px-4 h-10 rounded-md bg-[#1173d4] text-white text-sm font-semibold">
              <span className="material-symbols-outlined text-base">edit</span>
              Edit Details
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Profile Card */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div
                className="bg-center bg-cover rounded-full w-32 h-32 mx-auto mb-4"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQJM0oMJIzfeg5wF2fkc6dgb7o5MikrWTcp2T9nlgbo2qbmJUvi00jngN4R4uOn830CLhm6wpY_fw3Ob3nJkWrL42O6MypzZc_3W2MksDktI0Qpo95EGxGaDjNjvZ5WZdaYBLdALV0Kg7J578JwJDdxlQNMbhiW6tmdtF8csVOFzUTBxln2CIb43_TJg2XtZy5Dy2eintykoJEJGQjrS_fXXf7mYj_aF2MhR50LyFfHM4ZUarkr8YU6wa5chg0112F8-JGqS-M9rXK')",
                }}
              ></div>
              <h2 className="text-xl font-bold text-slate-800">Sophia Clark</h2>
              <p className="text-slate-500">STU12345</p>
            </div>
          </div>

          {/* Right Details */}
          <div className="col-span-12 lg:col-span-9">
            {/* Student Profile */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Student Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <Detail label="Student Name" value="Sophia Clark" />
                <Detail label="Email Address" value="sophia.c@collegename.edu" />
                <Detail label="Contact No." value="+1 (555) 123-4567" />
                <Detail label="Degree" value="B.Sc in Computer Science" />
                <Detail label="Department" value="Computer Science" />
                <Detail label="Admission Year" value="2023" />
              </div>
            </div>

            {/* Personal Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 border-b pb-3 mb-4">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <Detail label="Father's Name" value="Ethan Clark" />
                <Detail label="Mother's Name" value="Olivia Clark" />
                <Detail label="Gender" value="Female" />
                <Detail label="Date of Birth" value="15-01-2003" />
                <Detail label="Category" value="General" />
                <Detail label="Blood Group" value="O+" />
                <Detail label="Community" value="Not Applicable" />
                <Detail label="Nationality" value="American" />
                <div className="md:col-span-2">
                  <Detail
                    label="Address"
                    value="123 Maple Street, Anytown, CA 91234"
                  />
                </div>
                <Detail label="Aadhar Card No" value="**** **** 9012" />
                <Detail label="Identity Mark" value="Mole on left cheek" />
                <Detail label="Admission Date" value="20-08-2023" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ✅ Reusable Detail Component
function Detail({ label, value }) {
  return (
    <div>
      <p className="text-slate-500">{label}</p>
      <p className="text-slate-800 font-medium">{value}</p>
    </div>
  );
}

export default StudentDetails;
________________________________________css

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.input-box {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: royalblue;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn:hover {
  background-color: darkblue;
}
