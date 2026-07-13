// import React from "react";
// import { ArrowRight } from "lucide-react";
// import ruleImg from "../../assets/Rules.png"; // <-- image me jo clipboard hai

// const rules = [
//   {
//     no: "01",
//     title: "One Account",
//     desc: "Only one account is allowed per user.",
//   },
//   {
//     no: "02",
//     title: "No Cheating",
//     desc: "Cheating, hacking, or unfair methods are prohibited.",
//   },
//   {
//     no: "03",
//     title: "Timer Rule",
//     desc: "Answers after timer ends won't be accepted.",
//   },
//   {
//     no: "04",
//     title: "Final Result",
//     desc: "Results are final after verification.",
//   },
//   {
//     no: "05",
//     title: "Respect Others",
//     desc: "Maintain respectful behaviour while playing.",
//   },
//   {
//     no: "06",
//     title: "Account Safety",
//     desc: "Violation may permanently suspend your account.",
//   },
// ];

// const RulesSection = () => {
//   return (
//     <section className="bg-white rounded-3xl border border-purple-200 shadow-xl overflow-hidden">

//       <div className="p-6">

//         {/* Header */}
//         <div className="flex justify-between items-center">

//           <h2 className="text-3xl font-extrabold text-purple-700">
//             RULES
//           </h2>

//           {/* <button className="text-pink-500 font-semibold flex items-center gap-2 hover:gap-3 transition">
//             View All
//             <ArrowRight size={18}/>
//           </button> */}

//         </div>

//         {/* Body */}

//         <div className="grid lg:grid-cols-[1fr_1fr_320px] gap-8 mt-8">

//           {/* Left */}

//           <div className="space-y-7">

//             {rules.slice(0,3).map(rule=>(
//               <div key={rule.no} className="flex gap-4">

//                 <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold">
//                   {rule.no}
//                 </div>

//                 <div>

//                   <h3 className="font-bold text-gray-800">
//                     {rule.title}
//                   </h3>

//                   <p className="text-gray-500 text-sm leading-6">
//                     {rule.desc}
//                   </p>

//                 </div>

//               </div>
//             ))}

//           </div>

//           {/* Divider + Right */}

//           <div className="lg:border-l border-purple-200 lg:pl-8 space-y-7">

//             {rules.slice(3).map(rule=>(
//               <div key={rule.no} className="flex gap-4">

//                 <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold">
//                   {rule.no}
//                 </div>

//                 <div>

//                   <h3 className="font-bold text-gray-800">
//                     {rule.title}
//                   </h3>

//                   <p className="text-gray-500 text-sm leading-6">
//                     {rule.desc}
//                   </p>

//                 </div>

//               </div>
//             ))}

//           </div>

//           {/* Image */}

//           <div className="hidden lg:flex justify-center items-center -mt-10">

//             <img
//               src={ruleImg}
//               alt="Rules"
//               className="w-72 object-contain"
//             />

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default RulesSection;

import React from "react";
import ruleImg from "../../assets/Rules.png";

const rules = [
  {
    no: "01",
    title: "One Account",
    desc: "Only one account is allowed per user.",
  },
  {
    no: "02",
    title: "No Cheating",
    desc: "Cheating, hacking, or unfair methods are prohibited.",
  },
  {
    no: "03",
    title: "Timer Rule",
    desc: "Answers after timer ends won't be accepted.",
  },
  {
    no: "04",
    title: "Final Result",
    desc: "Results are final after verification.",
  },
  {
    no: "05",
    title: "Respect Others",
    desc: "Maintain respectful behaviour while playing.",
  },
  {
    no: "06",
    title: "Account Safety",
    desc: "Violation may permanently suspend your account.",
  },
];

const RulesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white rounded-3xl border border-purple-200 shadow-xl">

      {/* Background Image */}
      <img
        src={ruleImg}
        alt="Rules"
        className="
absolute
right-0
top-1/2
-translate-y-1/2

w-80
sm:w-72
md:w-80
lg:w-72

opacity-20
sm:opacity-15
lg:opacity-100

pointer-events-none
select-none
z-0
"
      />

      {/* Glow */}
      <div className="absolute -right-16 top-10 w-56 h-56 bg-pink-300/20 blur-3xl rounded-full"></div>
      <div className="absolute -left-16 bottom-10 w-48 h-48 bg-purple-300/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 p-6">

        {/* Header */}

        <div className="mb-8">

          <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-700">
            RULES
          </h2>

          <p className="text-gray-500 mt-1">
            Read carefully before playing
          </p>

        </div>

        {/* Rules */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left */}

          <div className="space-y-7">

            {rules.slice(0, 3).map((rule) => (

              <div key={rule.no} className="flex gap-4">

                <div className="min-w-[42px] h-[42px] rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg">

                  {rule.no}

                </div>

                <div>

                  <h3 className="font-bold text-gray-800">
                    {rule.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-6 mt-1">
                    {rule.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Right */}

          <div className="space-y-7 md:border-l md:border-purple-200 md:pl-2">

            {rules.slice(3).map((rule) => (

              <div key={rule.no} className="flex gap-4">

                <div className="min-w-[42px] h-[42px] rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg">

                  {rule.no}

                </div>

                <div>

                  <h3 className="font-bold text-gray-800">
                    {rule.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-6 mt-1">
                    {rule.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default RulesSection;