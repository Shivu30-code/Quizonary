import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/layout/Navbar";
import Sidebar from "../component/layout/SideBar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar/>
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};
    
export default MainLayout;