// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import HeroSection from "../component/home/HeroSection";
// import LeaderboardSection from "../component/home/LeaderboardSection";
// import NoticeSection from "../component/home/NoticeSection";
// import RulesSection from "../component/home/RulesSection";

// const Home = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     // <div className="bg-[#F7F5FF] min-h-screen flex -mt-20">
//     <div className="min-h-screen bg-[#F7F5FF] flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       {/* <Sidebar /> */}

//       {/* Main Content */}
//       {/* <main className="flex-1 lg:ml-72 p-6 lg:p-8 overflow-y-auto "> */}
//       <main className="flex-1 lg:ml-72 pt-24 lg:pt-8 px-4 sm:px-6 lg:px-8 pb-8 overflow-x-hidden">
//         {/* <HeroSection /> */}

//         <div className="mb-8">
//           <HeroSection />
//         </div>

//         {/* <DashboardStats /> */}
//         <div className="mb-8">
//            <LeaderboardSection />
//         </div>
       

//         {/* <div className="grid lg:grid-cols-2 gap-8 mt-8"> */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//           <NoticeSection />
//           <RulesSection />
//         </div>
//       </main>
//     </div>
//   );
// };



import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "../component/home/HeroSection";
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
    <div className="w-full">

      <div className="mb-8">
        <HeroSection />
      </div>

      <div className="mb-8">
        <LeaderboardSection />
      </div>

      <div className="space-y-8 mt-8">
        <NoticeSection />
        <RulesSection />
      </div>

    </div>
  );
};

export default Home;