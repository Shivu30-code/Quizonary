import React from "react";

const QuestionNavigation = ({
  handleNext,
  handlePrevious,
  handleReviewQuestion,
  handleClearResponse,
}) => {
  return (
    <div className="bg-white rounded-[35px] shadow-xl p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <button
          onClick={handlePrevious}
          className="py-4 rounded-3xl font-bold border-2 border-purple-700 text-purple-700"
        >
          PREVIOUS
        </button>

        <button
          onClick={handleNext}
          className="py-4 rounded-3xl font-bold text-white bg-gradient-to-r from-purple-700 to-pink-500"
        >
          SAVE & NEXT
        </button>

        <button
          onClick={handleReviewQuestion}
          className="py-4 rounded-3xl font-bold text-white bg-yellow-500"
        >
          MARK FOR REVIEW
        </button>

        <button
          onClick={handleClearResponse}
          className="py-4 rounded-3xl font-bold text-white bg-red-500"
        >
          CLEAR RESPONSE
        </button>
      </div>
    </div>
  );
};

export default QuestionNavigation;
