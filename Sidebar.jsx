import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="w-56 bg-zinc-100 h-screen text-white flex flex-col justify-between">
      {/* Top Menu */}
      <div className=" overflow-y-auto">
        <table className="w-full table-fixed text-left">
          <tbody>
            <tr className="hover:bg-gray-500">
              <td className="pl-4 py-2">Profile</td>
            </tr>
            <tr className="hover:bg-gray-500">
              <td className="pl-4 py-2">Hostel Occupancy Tracking</td>
            </tr>
            <tr className="hover:bg-gray-500">
              <td className="pl-4 py-2">Hostel Form</td>
            </tr>
            <tr className="hover:bg-gray-500">
              <td className="pl-4 py-2">Semester Registration</td>
            </tr>
            <tr className="hover:bg-gray-500">
              <td className="pl-4 py-2">Exam Registration</td>
            </tr>
            <tr className="hover:bg-gray-500">
              <td className="pl-4 py-2">Fee Payment</td>
            </tr>
            <tr className="hover:bg-gray-500">
              <td className="pl-4 py-2">Library Record</td>
            </tr>
            <tr className="hover:bg-gray-500">
              <td className="pl-4 py-2">Result</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Menu - fixed at bottom */}
      <div className="mb-12">
        <table className="w-full table-fixed text-left">
          <tbody>
            <tr className="hover:bg-gray-500">
              <td className="px-4 py-2">Settings</td>
            </tr>
            <tr className="hover:bg-gray-500">
              <td className="px-4 py-2">LogOut</td>
            </tr>
          </tbody>
        </table>
      </div>
    </aside>
  );
};

export default Sidebar;
