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