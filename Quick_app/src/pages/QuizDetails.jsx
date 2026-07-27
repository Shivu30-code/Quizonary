import React from "react";
import quizData from "../data/quizData";
import promo1 from "../assets/homeBg.png";
import { useNavigate } from "react-router-dom";

const QuizDetails = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen relative overflow-hidden px-4 py-8 md:px-8 md:py-10"
      style={{
        backgroundImage: `url(${promo1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/90
        via-purple-700/80 to-pink-600/80 backdrop-blur-sm"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="text-center text-white">

          <h1 className="text-3xl md:text-5xl font-bold">
            {quizData.title}
          </h1>

          <p className="mt-3 text-sm md:text-lg text-white/90">
            {quizData.subtitle}
          </p>
        </div>

        <div
          className="mt-8 rounded-[30px] p-6 md:p-8 text-center bg-white/20
          backdrop-blur-md border border-white/30 shadow-xl">

          <h1 className="text-2xl md:text-4xl font-bold text-white">
            WIN UPTO {quizData.prizePool}
          </h1>

          <p className="mt-3 text-sm md:text-lg text-white">
            Top {quizData.winners} Players Will Get Rewards
          </p>
        </div>

        <div
          className="mt-8 rounded-[35px] bg-white/95 p-5 md:p-8shadow-2xl">
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card title="Entry Fee" value={quizData.entryFee} />
            <Card title="Questions" value={quizData.questions} />
            <Card title="Duration" value={quizData.duration} />
            <Card title="Prize Pool" value={quizData.prizePool} />
            <Card title="Total Winners" value={quizData.winners} />
          </div>

          <SectionHeading title="Quiz Rules" />

          <div className="rounded-3xl bg-purple-50 p-5 md:p-6 shadow-md">
            <ul className="space-y-3 text-gray-700">
              <li>✓ Only One Attempt Allowed.</li>
              <li>✓ No Negative Marking.</li>
              <li>✓ Quiz Will Auto Submit.</li>
              <li>✓ Refreshing Is Not Allowed.</li>
              <li>✓ Top Rankers Will Get Rewards.</li>
              <li>✓ Entry Fee Is Non Refundable.</li>
            </ul>
          </div>

          <SectionHeading title="Prize Details" />

          <button
            onClick={() => {
              // navigate("/payment");
              navigate("/quiz-page",{
                state:{
                  title:quizData.title,
                  duration:quizData.duration,
                  questions:quizData.questions
                }
              }); 
            }}
            className=" w-full mt-10 py-4 md:py-5 rounded-3xl text-lg md:text-xl font-bold text-white
            shadow-xl bg-gradient-to-r from-purple-700 to-pink-500 hover:scale-[1.02] duration-300 ">

            PAY ₹30 & JOIN NOW

          </button>

          <p className="mt-4 text-center text-xs md:text-sm text-gray-500">
            By continuing, you agree that the entry fee is
            non-refundable once payment is successful.
          </p>
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ title }) => (
  <h1 className="mt-10 mb-5 text-2xl font-bold text-purple-700">
    {title}
  </h1>
);

const Card = ({ title, value }) => (
  <div className="rounded-3xl bg-gray-50 p-5 shadow-md hover:shadow-xl duration-300 ">
    <h3 className="text-sm text-gray-500">{title}</h3>
    <h1 className="mt-3 text-xl md:text-2xl font-bold">
      {value}
    </h1>
  </div>
);

const Prize = ({ title, value }) => (
  <div className=" flex items-center justify-between mb-3 rounded-2xl bg-white p-4 shadow-sm ">
    <h3 className="text-sm md:text-base font-semibold">
      {title}
    </h3>

    <h1 className="font-bold text-purple-700">
      {value}
    </h1>
  </div>
);

export default QuizDetails;
