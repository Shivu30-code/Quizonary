import React from "react";

const QuizStats = ({
  currentQuestion,
  totalQuestions,
  answered,
  review,
  notAnswered,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
      <Card
        title="Question"
        value={`${currentQuestion + 1}/${totalQuestions}`}
      />

      <Card
        title="Answered"
        value={answered}
      />

      <Card
        title="Review"
        value={review}
      />

      <Card
        title="Not Answered"
        value={notAnswered}
      />
    </div>
  );
};

const Card = ({ title, value }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-5 text-center">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <h1 className="mt-3 text-2xl font-bold text-purple-700">
        {value}
      </h1>
    </div>
  );
};

export default QuizStats;
