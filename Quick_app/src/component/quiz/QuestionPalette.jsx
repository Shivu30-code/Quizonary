import React from "react";

const QuestionPalette = ({
  questionData,
  getQuestionStatus,
  setCurrentQuestion,
  handleOpenSubmit,
}) => {
  const getColor = (status) => {
    switch (status) {
      case "answered":
        return "bg-green-500 text-white";

      case "review":
        return "bg-yellow-400 text-white";

      case "current":
        return "bg-purple-600 text-white";

      case "notAnswered":
      case "Submitted":
        return "bg-red-500 text-white";

      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="bg-white rounded-[35px] shadow-xl p-6 mb-8">
      <h1 className="mb-6 text-2xl font-bold text-purple-700">
        Question Palette
      </h1>

      <div className="grid grid-cols-5 md:grid-cols-6 gap-4">
        {questionData.map((question) => (
          <button
            key={question.id}
            onClick={() => setCurrentQuestion(question.id - 1)}
            className={`h-12 w-12 rounded-full font-bold duration-300 ${getColor(
              getQuestionStatus(question.id)
            )}`}
          >
            {question.id}
          </button>
        ))}
      </div>

      <button
        onClick={handleOpenSubmit}
        className="w-full mt-8 py-4 rounded-3xl text-lg font-bold text-white 
        bg-gradient-to-r from-purple-700 to-pink-500 hover:scale-[1.02] duration-300"
      >
        SUBMIT QUIZ
      </button>
    </div>
  );
};

export default QuestionPalette;
