import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const rules = [
  "Each participant can use only one account.",
  "Do not use unfair means during the quiz.",
  "Complete the quiz before the timer ends.",
  "Leaderboard updates automatically.",
  "Rewards will be credited after verification.",
  "Organizer's decision will be final.",
];

const RulesSection = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6 h-full">

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-purple-100 p-3 rounded-xl">
          <ShieldCheck className="text-purple-600" />
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Quiz Rules
          </h2>

          <p className="text-gray-500">
            Please read before starting
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {rules.map((rule, index) => (

          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-2xl bg-purple-50"
          >

            <CheckCircle2
              className="text-green-500 mt-1"
              size={20}
            />

            <p className="text-gray-700">
              {rule}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RulesSection;