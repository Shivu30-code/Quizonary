import React from "react";
import { useNavigate } from "react-router-dom";

const HistoryCard = ({ quiz }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mb-5 hover:shadow-2xl transition-all duration-300">
        <h1 className="text-2xl font-bold text-purple-700">
            {quiz.title}
        </h1>

        <p className="mt-3">
            <span className="font-semibold">Attempt ID:</span>{" "}
            {quiz.attemptID}
        </p>

        <p>
            <span className="font-semibold">Result Status:</span>{" "}
            {quiz.resultStatus}
        </p>

        <p>
            <span className="font-semibold">Submitted:</span>{" "}
            {quiz.submittedAt}
        </p>

        <button
            onClick={() =>
            navigate("/quiz-details", {
                state: quiz,
            })
            }
            className="w-full mt-5 py-3 rounded-3xl text-white font-bold bg-gradient-to-r from-purple-700
            to-pink-500 hover:from-purple-800 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
            VIEW DETAILS
        </button>
    </div>
  );
};

export default HistoryCard;
