import React from "react";

const SubmitPopup = ({
  isOpen,
  onClose,
  onSubmit,
  answered,
  review,
  notAnswered,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-centerp-5 bg-black/60">
        <div className="w-full max-w-md p-8 bg-white rounded-[35px]">
            <h1 className="mb-8 text-center text-3xl font-bold ">
            Submit Quiz
            </h1>

            <div className="space-y-4">
                <p>Answered : {answered}</p>
                <p>Review : {review}</p>
                <p>Not Answered : {notAnswered}</p>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-8">
                <button
                    onClick={onClose}
                    className="py-4 font-bold bg-gray-200 rounded-3xl hover:bg-gray-300 duration-300"
                >
                    NO
                </button>

                <button
                    onClick={onSubmit}
                    className="py-4 font-bold text-white bg-gradient-to-r from-purple-700
                    to-pink-500 rounded-3xl hover:opacity-90 duration-300"
                >
                    YES
                </button>

            </div>
        </div>
    </div>
  );
};

export default SubmitPopup;
