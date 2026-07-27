import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/layout/Navbar";
import Sidebar from "../component/layout/Sidebar";
import {pageTheme} from "../utils/theme";
import ThemeWrapper from "../component/ThemeWrapper";


const MainLayout = () => {
  return (
    <ThemeWrapper>
    <div className={`min-h-screen bg-[#F7F5FF] theme-card theme-text`}>
      <Sidebar />

      <div className="lg:ml-72">

        <div className="sticky top-0 z-30 p-4 lg:p-6 bg-[#F7F5FF] theme-card  duration-300">
          <Navbar />
        </div>

        {/* Pages */}
        <main className={`px-4 sm:px-6 lg:px-6 pb-6 theme-card duration-300 `}>
          <Outlet />
        </main>
      </div>
    </div>
    </ThemeWrapper>
  );
};

export default MainLayout;