import React from "react";
import promo1 from "../../assets/promo1.png"
import promo2 from "../../assets/promo2.png"
import {ArrowRight} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="mt-2">

      <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 shadow-2xl">

        <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-16 left-0 w-60 h-60 bg-purple-300/30 rounded-full blur-3xl"></div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-center p-10">

          <div className="relative z-10">

            <img
              src={promo1}
              alt="Background"
              className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] opacity-30 pointer-events-none z-10 object-contain"
            />

            <div className="relative z-10">

              <h1 className="text-5xl font-extrabold text-white -mt-8 leading-tight">
                Test Your Knowledge
                <br />
                Win Amazing Rewards
              </h1>

              <p className="text-purple-100 mt-5 text-lg leading-8 max-w-xl">
                Participate in today's live quiz, answer questions correctly,
                climb the leaderboard and win exciting cash prizes.
              </p>

              <div className="flex gap-4 mt-8">

                <button className="bg-white text-purple-700 font-bold px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 duration-300 shadow-lg">
                  Start Quiz
                  <ArrowRight />
                </button>

                <button className="border border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-purple-700 duration-300">
                  Learn More
                </button>

              </div>

            </div>

          </div>
          <div className="relative flex justify-center">
        
            <img 
              src={promo2}
              alt="img"
              className="w-full h-[450px] mr-15 object-contain"
              />
          </div> 

        </div>

      </div>

    </section>
  );
};

export default HeroSection;