import React from "react";

const WarningPopup = ({
  isOpen,
  warningCount,
  message,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-5 bg-black/60">
      <div className="w-full max-w-md p-8 bg-white rounded-[35px]">
        <h1 className="text-4xl font-bold text-center text-red-600">
          WARNING
        </h1>

        <h2 className="mt-5 text-2xl font-bold text-center">
          {warningCount} / 3
        </h2>

        <p className="mt-5 text-center text-gray-600">
          {message}
        </p>

        <p className="mt-5 text-center font-semibold text-red-500">
          Three Warnings Will Automatically Submit Your Quiz.
        </p>

        <button
          onClick={onClose}
          className="w-full py-4 mt-8 rounded-3xl font-bold text-white bg-red-500"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default WarningPopup;
