import React from "react";
import homeBg from "../assets/homeBg.png";
import {
  Trophy,
  Users,
  Clock3,
  ArrowRight,
  Brain,
  Star,
  Medal,
} from "lucide-react";

const WelcomeHome = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#240046] via-[#140028] to-[#020617]" />

      <img
        src={homeBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-600/30 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">


          <div>

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200 text-sm">
              🏆 India's Biggest Quiz Platform
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
               Play.
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                 {" "}Compete.
                 </span>
               <br />
               Win Real Rewards.
             </h1>

            <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
              Join India's fastest growing live quiz platform.
              Compete against thousands of players, improve your skills,
              climb the leaderboard and win exciting cash prizes.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 duration-300 shadow-2xl shadow-purple-900/40">
                Join Live Quiz

                <ArrowRight />
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 duration-300">
                Practice Free
              </button>

            </div>


            <div className="grid grid-cols-3 gap-6 mt-16">

              <div>

                <Users className="text-purple-400 mb-2" />

                <h2 className="text-3xl font-bold">
                  2K+
                </h2>

                <p className="text-gray-400">
                  Live Users
                </p>

              </div>

              <div>

                <Trophy className="text-yellow-400 mb-2" />

                <h2 className="text-3xl font-bold">
                  ₹2L+
                </h2>

                <p className="text-gray-400">
                  Prize Won
                </p>

              </div>

              <div>

                <Brain className="text-cyan-400 mb-2" />

                <h2 className="text-3xl font-bold">
                  50K+
                </h2>

                <p className="text-gray-400">
                  Questions
                </p>

              </div>

            </div>

          </div>


          <div className="relative">

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,.5)]">

              <div className="flex justify-between">

                <div>

                  <p className="text-gray-400">
                    Live Quiz
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    Mega GK Challenge
                  </h2>

                </div>

                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">

                  <Trophy className="text-black" size={30} />

                </div>

              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="rounded-2xl bg-white/5 p-5">

                  <Clock3 className="text-cyan-400" />

                  <h3 className="text-2xl font-bold mt-4">
                    08:00 PM
                  </h3>

                  <p className="text-gray-400">
                    Starts
                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-5">

                  <Users className="text-purple-400" />

                  <h3 className="text-2xl font-bold mt-4">
                    18,450
                  </h3>

                  <p className="text-gray-400">
                    Joined
                  </p>

                </div>

              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6">

                <p className="text-sm opacity-80">
                  Prize Pool
                </p>

                <h2 className="text-5xl font-black mt-2">
                  ₹50,000
                </h2>

              </div>

              <button className="w-full mt-8 bg-white text-black py-4 rounded-2xl font-bold hover:scale-105 duration-300">
                Join Now
              </button>

            </div>



            <div className="absolute -left-10 -top-12 bg-[#111827] rounded-2xl border border-white/10 px-5 py-4 shadow-xl">

              <div className="flex items-center gap-3">

                <Star className="text-yellow-400" />

                <div>

                  <h4 className="font-bold">
                    4.9 Rating
                  </h4>

                  <p className="text-xs text-gray-400">
                    Trusted by Players
                  </p>

                </div>

              </div>

            </div>
             <div className="absolute -right-25 -bottom-12 bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 shadow-xl">

              <div className="flex gap-3 items-center">

                 <Medal className="text-yellow-400" />

                 <div>

                   <h4 className="font-bold">
                     Daily Winners
                   </h4>

                   <p className="text-xs text-gray-400">
                     Win Real Cash
                   </p>

                 </div>

               </div>

             </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WelcomeHome;