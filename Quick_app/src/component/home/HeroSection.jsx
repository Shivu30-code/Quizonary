import React from "react";
import { ArrowRight } from "lucide-react";
import promo1 from "../../assets/promo1.png";
import promo2 from "../../assets/promo2.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

const navigate = useNavigate();
  return (
    <section className="mt-2">
      <div className="relative overflow-hidden rounded-[28px] lg:rounded-[35px] bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 shadow-2xl theme-card border-1 theme-border">

        {/* Blur Effects */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl"></div>

        {/* Background Decoration */}
      <img
  src={promo1}
  alt=""
  className="
    absolute
    left-0
    top-1/2
    -translate-y-1/2
    w-[180px]
    sm:w-[260px]
    md:w-[380px]
    lg:w-[520px]
    opacity-20
    pointer-events-none
    select-none
    object-contain
    z-0
  "
/>

        <div className="relative z-10 grid grid-cols-2 items-center px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10 gap-3 sm:gap-6 lg:gap-10">

          {/* LEFT */}
          <div className="relative z-10">

            <h1 className="font-extrabold text-white leading-tight
              text-[20px]
              sm:text-[30px]
              md:text-[40px]
              lg:text-[52px]">

              Test Your Knowledge
              <br />
              Win Amazing Rewards
            </h1>

            <p className="mt-3 text-white/90 leading-relaxed
              text-[11px]
              sm:text-sm
              lg:text-lg
              max-w-xl">

              Participate in today's live quiz, answer questions correctly,
              climb the leaderboard and win exciting cash prizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 mt-5 lg:mt-8">

              <button
                onClick={() => navigate("/quiz-details")} 
                className="bg-white text-purple-700 font-bold rounded-xl lg:rounded-2xl
                px-3 py-2
                sm:px-5 sm:py-3
                lg:px-8 lg:py-4
                text-[11px]
                sm:text-sm
                lg:text-base
                flex items-center justify-center gap-2
                hover:scale-105 duration-300">

                Start Quiz
                <ArrowRight size={16} />

              </button>

              <button className="border border-white text-white rounded-xl lg:rounded-2xl
                px-3 py-2
                sm:px-5 sm:py-3
                lg:px-8 lg:py-4
                text-[11px]
                sm:text-sm
                lg:text-base
                hover:bg-white hover:text-purple-700 duration-300">

                Learn More

              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-end">

            <img
              src={promo2}
              alt="Quiz"
              className="
                w-[150px]
                sm:w-[250px]
                md:w-[340px]
                lg:w-[520px]
                object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;