import React from "react";

const QuizLegend = () => {
  return (
    <div className="bg-white rounded-[35px] shadow-xl p-6 mb-8">
      <h1 className="mb-5 text-2xl font-bold text-purple-700">
        Question Status
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <Status
          title="Answered"
          color="bg-green-500"
        />

        <Status
          title="Review"
          color="bg-yellow-400"
        />

        <Status
          title="Current"
          color="bg-purple-600"
        />

        <Status
          title="Not Visited"
          color="bg-gray-400"
        />
      </div>
    </div>
  );
};

const Status = ({ title, color }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`${color} h-5 w-5 rounded-full`} />

      <h3>
        {title}
      </h3>
    </div>
  );
};

export default QuizLegend;
