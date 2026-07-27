import React from "react";

const QuizTimer = ({ minutes, seconds }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mb-8 text-center">
      <h3 className="text-gray-500">
        Time Left
      </h3>

      <h1 className="mt-2 text-4xl font-bold text-pink-600">
        {minutes} : {seconds}
      </h1>
    </div>
  );
};

export default QuizTimer;
