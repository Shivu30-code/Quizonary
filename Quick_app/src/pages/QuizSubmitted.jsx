import React,{useEffect,useState}from "react";
import { useNavigate } from "react-router-dom";

const QuizSubmitted = () => {
 const[result,setResult]=useState(null);
  useEffect(()=>{

  const data=JSON.parse(
    localStorage.getItem("quizResult")
  );
  setResult(data);

},[]);
const resultDate =
new Date(
Date.now()+86400000
).toLocaleDateString();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600">
      <div className="w-full max-w-2xl p-8 bg-white rounded-[40px] shadow-2xl">
        <div className="text-center">
          <div className="text-7xl">
            🏆
          </div>

          <h1 className="text-4xl font-bold text-purple-700">
            QUIZ SUBMITTED
          </h1>
        </div>

        <p className="mt-5 text-center text-gray-600">
          Congratulations 🎉
          <br />
          Your Quiz Has Been Submitted Successfully.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-10">
          <Card title="Attempt ID" value={result?.attemptID} />
          <Card title="Score" value={result?.score || 0} />
          <Card title="Correct" value={result?.correct || 0} />
          <Card title="Wrong" value={result?.wrong} />
          <Card title="Questions" value={result?.totalQuestions} />
          <Card title="Answered" value={result?.answered} />
          <Card title="Review" value={result?.review} />
          <Card title="Not Answered" value={result?.notAnswered} />
          <Card title="Rank" value={result?.rank || "PENDING"}/>
          <Card title="Reward" value={result?.reward || "PENDING"}/>
          <Card title="Time Taken" value={`${Math.floor(
            (result?.timeTaken || 0)/60)} Min`} 
          />
        </div>

        <div className="mt-8 p-5 bg-purple-50 rounded-3xl">
          <h3 className="text-lg font-bold">
            {result?.resultStatus}
          </h3>

          <h1 className="text-2xl font-bold text-purple-700">
             {result?.resultStatus}
          </h1>
        </div>

        <div className="mt-5 p-5 bg-pink-50 rounded-3xl">
          <h3 className="text-lg font-bold">
            {resultDate}
          </h3>

          <h1 className="text-2xl font-bold text-pink-600">
            25 JULY
          </h1>
        </div>

        <button
          onClick={() => navigate("/home")}
          className="w-full py-4 mt-8 rounded-3xl font-bold text-white bg-gradient-to-r from-purple-700 to-pink-500"
        >
          GO TO HOME
        </button>

        <button
            onClick={() => navigate("/leaderboard")}
          className="w-full py-4 mt-5 rounded-3xl font-bold border-2 border-purple-700 text-purple-700"
        >
          VIEW LEADERBOARD
        </button>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => {
  return (
    <div className="bg-gray-50 rounded-3xl shadow-md text-center p-5">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <h1 className="mt-3 text-3xl font-bold text-purple-700">
        {value}
      </h1>
    </div>
  );
};

export default QuizSubmitted;
