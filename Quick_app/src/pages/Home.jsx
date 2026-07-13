// import React from 'react'

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from '../component/layout/SideBar';
// import Navbar from '../component/layout/Navbar';
// import HeroSection from '../component/home/HeroSection';
// import LeaderboardSection from '../component/home/LeaderboardSection';
// import NoticeSection from '../component/home/NoticeSection';
// import RulesSection from '../component/home/RulesSection';
// import DashboardStats from '../component/home/DashboardStats';

// const Home = () => {
//   const navigate = useNavigate();

//   useEffect(() => {

//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login");
//     }

//   }, []);

//   return (
//    <div className="bg-[#F7F5FF] min-h-screen">

//       <Sidebar />

//       <div className="ml-72 p-8 -mt-25">

//         {/* <Navbar /> */}

//         {/* Hero Section */}

//         <HeroSection/>

//         <DashboardStats/>

//         {/* Next Components */}

//         <LeaderboardSection/>

//         <div className="grid lg:grid-cols-2 gap-8 mt-8">
//           <NoticeSection />
//           <RulesSection />
//       </div>

//       </div>

//     </div>
//   );
// };


// export default Home

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../component/layout/SideBar";
import HeroSection from "../component/home/HeroSection";
import DashboardStats from "../component/home/DashboardStats";
import LeaderboardSection from "../component/home/LeaderboardSection";
import NoticeSection from "../component/home/NoticeSection";
import RulesSection from "../component/home/RulesSection";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-[#F7F5FF] min-h-screen flex -mt-20">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-6 lg:p-8 overflow-y-auto ">
        <HeroSection />

        {/* <DashboardStats /> */}

        <LeaderboardSection />

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <NoticeSection />
          <RulesSection />
        </div>
      </main>
    </div>
  );
};

export default Home;