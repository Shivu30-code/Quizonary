// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../component/layout/Navbar";
// import Sidebar from "../component/layout/Sidebar";

// const MainLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <Sidebar/>
//       <main className="pt-20">
//         <Outlet />
//       </main>
//     </>
//   );
// };
    
// export default MainLayout;


import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/layout/Navbar";
import Sidebar from "../component/layout/Sidebar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#F7F5FF]">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="lg:ml-72">
        {/* Navbar */}
        <div className="sticky top-0 z-30 p-4 lg:p-6 bg-[#F7F5FF]">
          <Navbar />
        </div>

        {/* Pages */}
        <main className="px-4 sm:px-6 lg:px-6 pb-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;