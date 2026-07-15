import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/layout/Sidebar";

const SidebarLayout = () => {
  return (
    <div className="min-h-screen bg-[#F7F5FF]">

      {/* Sidebar */}
      <Sidebar />

      {/* Pages */}
      <main className="lg:ml-72 px-4 sm:px-6 lg:px-6 py-6">
        <Outlet />
      </main>

    </div>
  );
};

export default SidebarLayout;