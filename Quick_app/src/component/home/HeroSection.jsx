// import React from "react";
// import promo1 from "../../assets/promo1.png"
// import promo2 from "../../assets/promo2.png"
// import {ArrowRight} from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="mt-2">

//       {/* <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 shadow-2xl"> */}
//       <div className="relative overflow-hidden rounded-3xl lg:rounded-[35px] bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 shadow-2xl">
        
//         <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

//         <div className="absolute -bottom-16 left-0 w-60 h-60 bg-purple-300/30 rounded-full blur-3xl"></div>
        
//         {/* <div className="grid lg:grid-cols-2 gap-10 items-center p-10"> */}
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center px-6 py-10 sm:px-8 lg:p-10">

//           <div className="relative z-10">

//             <img
//               src={promo1}
//               alt="Background"
//               // className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] opacity-30 pointer-events-none z-10 object-contain"
//               className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-[520px] opacity-30 pointer-events-none object-contain"
//             />

//             <div className="relative z-10">

//               <h1 
//                 // className="text-5xl font-extrabold text-white -mt-8 leading-tight"
//                 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
//               >
//                 Test Your Knowledge
//                 <br />
//                 Win Amazing Rewards
//               </h1>

//               <p 
//                 // className="text-purple-100 mt-5 text-lg leading-8 max-w-xl"
//                 className="text-purple-100 mt-4 text-sm sm:text-base lg:text-lg leading-7 max-w-xl"
//               >
//                 Participate in today's live quiz, answer questions correctly,
//                 climb the leaderboard and win exciting cash prizes.
//               </p>

//               {/* <div className="flex gap-4 mt-8"> */}
//               <div className="flex flex-col sm:flex-row gap-4 mt-8">

//                 <button 
//                   // className="bg-white text-purple-700 font-bold px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 duration-300 shadow-lg">
//                  className="bg-white text-purple-700 font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 duration-300 shadow-lg" 
//                 >
//                   Start Quiz
//                   <ArrowRight />
//                 </button>

//                 <button 
//                 // className="border border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-purple-700 duration-300">
//                   className="border border-white text-white px-6 py-3 lg:px-8 lg:py-4 rounded-2xl hover:bg-white hover:text-purple-700 duration-300"
//                 >  
//                   Learn More
//                 </button>

//               </div>

//             </div>

//           </div>
//           {/* <div className="relative flex justify-center"> */}
//           <div className="relative flex justify-center order-first lg:order-last">
        
//             <img 
//               src={promo2}
//               alt="img"
//               // className="w-full h-[450px] mr-15 object-contain"
//               className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] h-auto object-contain"
//               />
//           </div> 

//         </div>

//       </div>

//     </section>
//   );
// };

// export default HeroSection;


// import React from "react";
// import promo1 from "../../assets/promo1.png";
// import promo2 from "../../assets/promo2.png";
// import { ArrowRight } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="mt-2">
//       <div className="relative overflow-hidden rounded-3xl lg:rounded-[35px] bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 shadow-2xl">
        
//         {/* Background Blur */}
//         <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-16 left-0 w-60 h-60 bg-purple-300/30 rounded-full blur-3xl"></div>

//         {/* Background Image */}
//         <img
//           src={promo1}
//           alt="Background"
//           className="absolute top-1/2 right-0 -translate-y-1/2 w-[180px] sm:w-[260px] md:w-[350px] lg:w-[520px] opacity-30 pointer-events-none object-contain"
//         />

//         {/* Main Content */}
//         <div className="relative z-10 grid grid-cols-2 items-center gap-4 sm:gap-6 lg:gap-10 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">

//           {/* Left Content */}
//           <div>
//             <h1 className="text-lg sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight">
//               Test Your Knowledge
//               <br />
//               Win Amazing Rewards
//             </h1>

//             <p className="mt-3 text-[11px] sm:text-sm lg:text-lg text-purple-100 leading-5 lg:leading-8 max-w-xl">
//               Participate in today's live quiz, answer questions correctly,
//               climb the leaderboard and win exciting cash prizes.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 mt-5 lg:mt-8">
//               <button className="bg-white text-purple-700 text-[11px] sm:text-sm lg:text-base font-bold px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl flex items-center justify-center gap-2 hover:scale-105 duration-300 shadow-lg">
//                 Start Quiz
//                 <ArrowRight size={18} />
//               </button>

//               <button className="border border-white text-white text-[11px] sm:text-sm lg:text-base px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl hover:bg-white hover:text-purple-700 duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center">
//             <img
//               src={promo2}
//               alt="Quiz"
//               className="w-full max-w-[150px] sm:max-w-[260px] md:max-w-[360px] lg:max-w-[520px] h-auto object-contain"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { ArrowRight } from "lucide-react";
import promo1 from "../../assets/promo1.png";
import promo2 from "../../assets/promo2.png";

const HeroSection = () => {
  return (
    <section className="mt-2">
      <div className="relative overflow-hidden rounded-[28px] lg:rounded-[35px] bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 shadow-2xl">

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

              <button className="bg-white text-purple-700 font-bold rounded-xl lg:rounded-2xl
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