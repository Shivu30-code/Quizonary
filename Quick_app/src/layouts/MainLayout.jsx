import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};
    
export default MainLayout;