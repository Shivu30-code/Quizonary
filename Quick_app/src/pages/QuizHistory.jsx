import React from "react";
import { getQuizHistory } from "../utils/quizHistory";
import HistoryCard from "../component/history/HistoryCard";
import axios from "axios";
import { useEffect, useState } from "react";

const QuizHistory = () => {
  const [history, setHistory] = useState([]);

useEffect(() => {

    const fetchHistory = async () => {

        const user = JSON.parse(
            localStorage.getItem("user")
        );

        try {

            const response =
            await axios.get(
                `http://localhost:5000/api/quiz/history/${user._id}`
            );

            setHistory(
                response.data.data
            );

        } catch (error) {

            console.log(error);

        }
    };

    fetchHistory();

}, []);

  return (
    <div className="min-h-screen p-5">
      <h1 className="text-4xl font-bold mb-10">
        Quiz History
      </h1>

      {history.length === 0 ? (
        <h2>No Quiz Found</h2>
      ) : (
        history.map((quiz,index)=>(

            <HistoryCard
                key={index}
                quiz={quiz}
            />
        ))
      )}
    </div>
  );
};

export default QuizHistory;


