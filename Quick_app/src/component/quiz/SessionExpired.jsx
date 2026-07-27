import React from "react";
import {useNavigate}from "react-router-dom";

const SessionExpired = () => {

  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center p-5 bg-black/70">
      <div className="w-full max-w-md p-8 bg-white rounded-[35px]">
        <h1 className="text-4xl font-bold text-center text-red-600">
          SESSION EXPIRED
        </h1>

        <p className="mt-5 text-center text-gray-600">
          Your Quiz Session Has Been Expired.
        </p>
        <button
          onClick={() => navigate("/")}
          className="w-full mt-8 py-4 rounded-3xl font-bold text-white bg-gradient-to-r from-purple-700 to-pink-500
          hover:from-purple-800 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          GO TO HOME
        </button>

      </div>
    </div>
  );
};

export default SessionExpired;
