import React from "react";
import { X } from "lucide-react";

const SupportModal = ({isOpen,onClose,data}) => {
    if (!isOpen) return null;

  return (

    <div
        className=" fixed inset-0 z-50 flex items-center
        justify-center bg-black/50 backdrop-blur-sm p-5">

        <div
            className="w-full max-w-2xl rounded-[35px]
            bg-white shadow-2xl overflow-hidden theme-card">

            <div
                className=" flex items-center
                justify-between px-8 py-6 border-b">

                <div className="flex items-center gap-4">


                    <h1 className="text-2xl font-black text-gray-800 theme-text">
                    {data?.title}
                    </h1>

                </div>

                <button
                    onClick={onClose}
                    className=" w-12 h-12 rounded-xl bg-gray-100 hover:bg-red-100
                    duration-300 flex items-center justify-center theme-danger">
                    <X size={25} />
                </button>

            </div>


            <div className=" p-8 max-h-[70vh] overflow-y-auto">

                {data?.questions ? (

                    <div className="space-y-6">

                        {data.questions.map((item,index)=>(

                            <div
                            key={index}
                            className=" rounded-2xl border border-purple-100 p-5">

                                <h2 className=" text-lg font-bold text-purple-700 theme-text">
                                    {item.question}
                                </h2>


                                <p className="mt-2 text-gray-600 theme-text-light">
                                {item.answer}
                                </p>

                            </div>

                        ))}

                    </div>

                ) : (


                    <div className="space-y-5">

                        {data?.points?.map((item,index)=>(

                        <div
                            key={index}
                            className="flex gap-3">

                            <div className="w-2 h-2 rounded-full bg-purple-700 mt-2"/>


                            <p className=" text-gray-600 font-medium theme-text-light">
                                {item}
                            </p>

                        </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    </div>

  )
}

export default SupportModal