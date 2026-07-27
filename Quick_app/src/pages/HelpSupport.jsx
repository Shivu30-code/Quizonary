import React, { useState } from 'react'
import {LifeBuoy,ChevronRight,CircleHelp,Mail,Bug,
    Lightbulb,Shield,FileText,Lock,Headphones } from "lucide-react";
import SupportModal from "../pages/SupportModal";
import { helpSupportData } from "../data/helpSupportData";


const HelpSupport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const openModal = (data)=>{
        setModalData(data);
        setIsOpen(true);
    };
    const closeModal = ()=>{

        setIsOpen(false);

    };

  return (
    <>
        <div className="text-center">
            <div
                className=" mx-auto mb-6 w-24 h-24 rounded-3xl bg-gradient-to-r from-purple-700
                via-violet-600 to-pink-500 flex items-center justify-center shadow-xl">

                <LifeBuoy
                    size={45}
                    className="text-white"
                />

            </div>


            <h1
                className=" text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r
                from-purple-700 via-violet-600 to-pink-500 bg-clip-text text-transparent theme-text">
                HELP & SUPPORT
            </h1>

            <p className="mt-4 text-gray-500 text-base sm:text-lg theme-text-light">
                We're always here to help you.
            </p>


            <div
                className=" mt-7 inline-flex items-center gap-3 rounded-full
                border border-purple-200 bg-purple-50 px-6 py-3 theme-card">

                <span className=" w-3 h-3 rounded-full bg-green-500 animate-pulse"/>

                <p className="font-semibold text-purple-700 theme-text-light">
                    Quizonary Support Team
                </p>

            </div>

        </div>

        <div className="mt-16">

            <button
                onClick={()=>openModal(
                    helpSupportData.faq
                )}
                className="w-full rounded-[35px] border border-purple-100 bg-white/70
                backdrop-blur-sm p-7 flex items-center justify-between gap-6 hover:shadow-2xl
                hover:border-purple-300 hover:-translate-y-1 duration-300 theme-card"
            >

                <div className="flex items-center gap-5">

                    <div
                        className=" w-16 h-16 rounded-2xl bg-purple-100
                        flex items-center justify-center">

                        <CircleHelp
                            size={30}
                            className="text-purple-700"
                        />

                    </div>



                    <div className="text-left">

                        <h2 className="text-xl font-bold text-gray-800 theme-text">
                            Frequently Asked Questions
                        </h2>


                        <p className="text-gray-500 theme-text-light">
                            View commonly asked questions
                            and answers.
                        </p>

                    </div>


                </div>



                <ChevronRight
                    size={28}
                    className="text-purple-700 flex-shrink-0"
                />

            </button>

        </div>
        
        <div className="mt-8">

            <button
                onClick={()=>openModal(
                    helpSupportData.contactSupport
                )}
                className="w-full rounded-[35px] border border-purple-100 bg-white/70
                backdrop-blur-sm p-7 flex items-center justify-between gap-6 hover:shadow-2xl
                hover:border-purple-300 hover:-translate-y-1 duration-300 theme-card"
            >

                <div className="flex items-center gap-5">


                    <div
                        className=" w-16 h-16 rounded-2xl bg-pink-100
                        flex items-center justify-center">

                        <Mail
                            size={30}
                            className="text-pink-600"
                        />

                    </div>




                    <div className="text-left">

                        <h2 className="text-xl font-bold text-gray-800 theme-text">
                            Contact Support
                        </h2>


                        <p className="text-gray-500 theme-text-light">
                            We're here for you 24×7.
                        </p>


                        <p className=" mt-1 font-semibold text-purple-700 ">
                            support@quizonary.com
                        </p>

                    </div>

                </div>

                <ChevronRight
                    size={28}
                    className="text-pink-600 flex-shrink-0"
                />

            </button>

        </div>


        <div className="mt-8">


            <button
                onClick={()=>openModal(
                    helpSupportData.reportProblem
                )}

                className="w-full rounded-[35px] border border-purple-100 bg-white/70
                backdrop-blur-sm p-7 flex items-center justify-between gap-6 hover:shadow-2xl
                hover:border-purple-300 hover:-translate-y-1 duration-300 theme-card"
            >


                <div className="flex items-center gap-5">


                   <div
                        className=" w-16 h-16 rounded-2xl bg-red-100
                        flex items-center justify-center">

                        <Bug
                            size={30}
                            className="text-red-600"
                        />

                    </div>

                    <div className="text-left">

                        <h2 className="text-xl font-bold text-gray-800 theme-text">
                            Report a Problem
                        </h2>


                        <p className="text-gray-500 theme-text-light">
                            Tell us about bugs or any
                            issues you're facing.
                        </p>


                        <p className=" mt-1 font-semibold text-red-700">
                            Usually replies within 24 Hours.
                        </p>

                    </div>


                </div>

                <ChevronRight
                    size={28}
                    className="text-red-600 flex-shrink-0"
                />


            </button>


        </div>

        <div className="mt-8">


            <button
                onClick={()=>openModal(
                    helpSupportData.suggestFeature
                )}
                 className="w-full rounded-[35px] border border-purple-100 bg-white/70
                backdrop-blur-sm p-7 flex items-center justify-between gap-6 hover:shadow-2xl
                hover:border-purple-300 hover:-translate-y-1 duration-300 theme-card"
            >



                <div className="flex items-center gap-5">


                   <div
                        className=" w-16 h-16 rounded-2xl bg-red-100
                        flex items-center justify-center">

                        <Lightbulb
                            size={30}
                            className="text-yellow-600"
                        />

                    </div>

                    <div className="text-left">

                        <h2 className="text-xl font-bold text-gray-800 theme-text">
                            Suggest a Feature
                        </h2>


                        <p className="text-gray-500 theme-text-light">

                            Share your ideas and help us
                            improve Quizonary.

                        </p>


                        <p className=" mt-1 font-semibold text-yellow-700 ">
                            Your feedback matters to us.
                        </p>

                    </div>

                </div>

                <ChevronRight
                    size={28}
                    className="text-yellow-600 flex-shrink-0"
                />

            </button>


        </div>


        <div className="mt-8">


            <button
                onClick={()=>openModal(
                    helpSupportData.communityGuidelines
                )}
                className="w-full rounded-[35px] border border-purple-100 bg-white/70
                backdrop-blur-sm p-7 flex items-center justify-between gap-6 hover:shadow-2xl
                hover:border-purple-300 hover:-translate-y-1 duration-300 theme-card"
            >



                <div className="flex items-center gap-5">


                   <div
                        className=" w-16 h-16 rounded-2xl bg-red-100
                        flex items-center justify-center">

                        <Shield
                            size={30}
                            className="text-green-600"
                        />

                    </div>

                    <div className="text-left">

                        <h2 className="text-xl font-bold text-gray-800 theme-text">
                            Community Guidelines
                        </h2>


                        <p className="text-gray-500 theme-text-light">

                            Learn about our fair play
                            policies and community rules.

                        </p>


                        <p className=" mt-1 font-semibold text-green-700 ">
                            Play Fair • Learn • Grow

                        </p>


                    </div>


                </div>

                <ChevronRight
                    size={28}
                    className="text-green-600 flex-shrink-0"
                />


            </button>


        </div>

        <div className="mt-8">


            <button
                onClick={()=>openModal(
                    helpSupportData.termsAndConditions
                )}
                className="w-full rounded-[35px] border border-purple-100 bg-white/70
                backdrop-blur-sm p-7 flex items-center justify-between gap-6 hover:shadow-2xl
                hover:border-purple-300 hover:-translate-y-1 duration-300 theme-card"
            >



                <div className="flex items-center gap-5">


                   <div
                        className=" w-16 h-16 rounded-2xl bg-red-100
                        flex items-center justify-center">
                        <FileText
                            size={30}
                            className="text-blue-600"
                        />

                    </div>



                    <div className="text-left">

                        <h2 className="text-xl font-bold text-gray-800 theme-text">
                            Terms & Conditions
                        </h2>


                        <p className="text-gray-500 theme-text-light">

                            Please read our Terms &
                            Conditions carefully.

                        </p>

                        <p className=" mt-1 font-semibold text-blue-700">
                            Know your rights & responsibilities.
                        </p>

                    </div>

                </div>

                <ChevronRight
                    size={28}
                    className="text-blue-600 flex-shrink-0"
                />

            </button>

        </div>


        <div className="mt-8">


            <button
                onClick={()=>openModal(
                    helpSupportData.privacyPolicy
                )}
                className="w-full rounded-[35px] border border-purple-100 bg-white/70
                backdrop-blur-sm p-7 flex items-center justify-between gap-6 hover:shadow-2xl
                hover:border-purple-300 hover:-translate-y-1 duration-300 theme-card"
            >



                <div className="flex items-center gap-5">


                   <div
                        className=" w-16 h-16 rounded-2xl bg-red-100
                        flex items-center justify-center">
                        <Lock
                            size={30}
                            className="text-pink-600 flex-shrink-0"
                        />

                    </div>




                    <div className="text-left">

                        <h2 className="text-xl font-bold text-gray-800 theme-text">
                            Privacy Policy
                        </h2>


                        <p className="text-gray-500 theme-text-light">

                            Learn how we collect,
                            use and protect your data.

                        </p>


                        <p className=" mt-1 font-semibold text-pink-700">
                            Your privacy is our priority.

                        </p>

                    </div>

                </div>


                <ChevronRight
                    size={28}
                    className="text-pink-600 flex-shrink-0"
                />

            </button>

        </div>

       <div className="mt-12 mb-6 sm:mt-20 sm:mb-10">

            <div
                className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-purple-700
                via-violet-600 to-pink-500 p-[2px] shadow-[0_20px_60px_rgba(147,51,234,.35)] theme-border">

                <div className="rounded-[38px] bg-white p-5 sm:p-8 lg:p-10 text-center theme-card">


                    <div
                        className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-rfrom-purple-700
                        via-violet-600 to-pink-500 flex items-center justify-center shadow-xl theme-card">
                        <Headphones
                            size={45}
                            className="text-purple-600 theme-text"
                        />

                    </div>

                    <h1
                        className=" mt-8 text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r
                        from-purple-700 via-violet-600 to-pink-500 bg-clip-text text-transparent theme-text">
                        NEED MORE HELP ?

                    </h1>

                    <p className="mt-4 text-gray-500 theme-text-light">
                        Our support team is always happy
                        to assist you.
                    </p>

                    <div
                        className="mt-8 inline-flex flex-wrap items-center justify-center gap-3
                        rounded-full bg-purple-50 border border-purple-200 px-5 py-3 sm:px-7 sm:py-4 theme-card">
                        <Mail
                            size={22}
                            className="text-purple-700 theme-text"
                        />

                        <p className="font-bold text-purple-700 text-sm sm:text-basebreak-all theme-text-light">
                            support@quizonary.com
                        </p>

                    </div>

                    <p className="mt-4 text-gray-500 theme-text-light">
                        Available 24×7 • Average response
                        time is less than 24 Hours.
                    </p>

                    <button
                       className="mt-8 px-7 sm:px-10 py-3 sm:py-4 rounded-2xl text-sm sm:text-base
                        bg-gradient-to-r from-purple-700 via-violet-600 to-pink-500 
                        text-white font-bold shadow-xl nhover:scale-105 duration-300"
                    >
                        Contact Support
                    </button>

                    <div className=" my-10 border-t border-purple-100"/>

                    <h2 className="text-2xlfont-black text-gray-800 theme-text">
                        Thank You For Choosing Quizonary
                    </h2>




                    <p className="mt-3 text-purple-700 font-semibold">
                        Learn • Play • Win
                    </p>

                </div>

            </div>

        </div>

        <SupportModal

            isOpen={isOpen}

            onClose={closeModal}

            data={modalData}

        />
    </>
  )
}

export default HelpSupport