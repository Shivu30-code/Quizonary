import React from "react";

const QuestionCard = ({
  question,
  selectedAnswers,
  handleAnswerSelect,
}) => {
  return (
    <div className="bg-white rounded-[35px] shadow-xl p-6 md:p-8 mb-8">
      {/* Question Number */}
      <h3 className="text-lg font-bold text-purple-700">
        Question No - {question.id}
      </h3>

      {/* Question */}
      <h1 className="mt-5 text-xl md:text-3xl font-bold">
        {question.question}
      </h1>

      {/* Options */}
      <div className="mt-8 space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            className={`w-full text-left rounded-3xl border-2 p-5 duration-300 ${
              selectedAnswers[question.id] === option
                ? "bg-purple-600 text-white border-purple-600"
                : "border-purple-100 hover:bg-purple-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
