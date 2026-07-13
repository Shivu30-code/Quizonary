import React from "react";
import StatsCard from "./StatsCard";

import {
  Coins,
  Trophy,
  Flame,
  Wallet,
} from "lucide-react";

const DashboardStats = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">

      <StatsCard
        title="Coins"
        value="1500"
        icon={Coins}
        bg="bg-yellow-100"
        iconBg="text-yellow-500"
        text="text-yellow-500"
      />

      <StatsCard
        title="Current Rank"
        value="#12"
        icon={Trophy}
        bg="bg-purple-100"
        iconBg="text-purple-600"
        text="text-purple-600"
      />

      <StatsCard
        title="Daily Streak"
        value="15 Days"
        icon={Flame}
        bg="bg-orange-100"
        iconBg="text-orange-500"
        text="text-orange-500"
      />

      <StatsCard
        title="Wallet"
        value="₹2,450"
        icon={Wallet}
        bg="bg-pink-100"
        iconBg="text-pink-600"
        text="text-pink-600"
      />

    </div>
  );
};

export default DashboardStats;