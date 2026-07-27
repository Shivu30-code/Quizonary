import React from "react";

const ResumeQuizPopup = ({isOpen,onContinue,onRestart,})=>{
    if(!isOpen){
        return null;
    }

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-5">

            <div className="max-w-md w-full bg-white rounded-[35px] p-8">


                <h1 className=" text-3xl font-bold text-center text-purple-700">
                    Resume Quiz
                </h1>

                <p className="text-center text-gray-600 mt-5">
                You Have An Incomplete Quiz.
                </p>

                <div className="grid grid-cols-1 gap-5 mt-8">

                    <button
                        onClick={onContinue}
                        className="py-4 rounded-3xl font-bold text-white bg-gradient-to-r from-purple-700 to-pink-500"
                    >
                        CONTINUE QUIZ
                    </button>

                    <button
                        onClick={onRestart}
                        className="py-4 rounded-3xl font-bold border-2 border-purple-700 text-purple-700"
                    >
                        START FRESH QUIZ
                    </button>

                </div>

            </div>

        </div>
    );
};


export default ResumeQuizPopup;