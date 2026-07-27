import React from "react";

const TimeUpPopup = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-[35px] p-8">
        <h1 className="text-4xl font-bold text-center text-red-600">
          TIME UP
        </h1>

        <p className="mt-5 text-center text-gray-600">
          Your Quiz Has Been Submitted Automatically.
        </p>

        <button className="w-full py-4 mt-8 rounded-3xl font-bold text-white bg-gradient-to-r from-purple-700 to-pink-500">
          QUIZ SUBMITTED
        </button>
      </div>
    </div>
  );
};

export default TimeUpPopup;
