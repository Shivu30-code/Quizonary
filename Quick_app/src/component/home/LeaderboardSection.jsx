// import React from "react";
// import { Crown, Trophy, Gift } from "lucide-react";

// const leaderboard = [
//   {
//     rank: 1,
//     name: "Shivam Pal",
//     prize: "₹5,000",
//     points: 980,
//     time: "08:25",
//   },
//   {
//     rank: 2,
//     name: "Rahul Patel",
//     prize: "₹3,000",
//     points: 965,
//     time: "09:12",
//   },
//   {
//     rank: 3,
//     name: "Aman Shah",
//     prize: "₹2,000",
//     points: 950,
//     time: "09:45",
//   },
//   {
//     rank: 4,
//     name: "Priya Singh",
//     prize: "₹1,000",
//     points: 940,
//     time: "10:18",
//   },
//   {
//     rank: 5,
//     name: "Karan Mehta",
//     prize: "Gift Card",
//     points: 930,
//     time: "11:03",
//   },
// ];

// const LeaderboardSection = () => {
//   return (
//     <section className="mt-10">

//       {/* <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-8"> */}
//       <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-4 sm:p-6 lg:p-8">

//         {/* <div className="flex justify-between items-center mb-8"> */}
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 mb-8">

//           <div className="flex items-center gap-3">

//             <Trophy className="text-yellow-500 w-8 h-8 sm:w-9 sm:h-9" size={34} />

//             <div>

//               {/* <h2 className="text-3xl font-bold text-gray-800"> */}
//               <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
//                 Today's Leaderboard
//               </h2>

//               <p className="text-gray-500">
//                 Top performers of today's quiz
//               </p>

//             </div>

//           </div>

//           <button 
//             // className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 duration-300">
//             className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
//           >  
//             View All
//           </button>

//         </div>

//         {/* <div className="grid grid-cols-5 bg-purple-50 rounded-2xl px-6 py-4 font-bold text-purple-700"> */}
//         <div className="hidden md:grid grid-cols-5 bg-purple-50 rounded-2xl px-6 py-4 font-bold text-purple-700">

//           <div>Rank</div>

//           <div>Leaderboard</div>

//           <div>Prizes</div>

//           <div>Points</div>

//           <div>Time</div>

//         </div>


//         <div className="mt-3 space-y-3">

//           {leaderboard.map((player) => (

//             <div
//               key={player.rank}
//               // className="grid grid-cols-5 items-center bg-white border border-purple-100 rounded-2xl px-6 py-4 hover:shadow-lg hover:border-pink-300 transition"
//               // className="grid md:grid-cols-5 gap-4 md:gap-0 bg-white border border-purple-100 rounded-2xl p-4 md:px-6 md:py-4 hover:shadow-lg hover:border-pink-300 transition"
//              className="hidden lg:grid grid-cols-5 items-center bg-white border border-purple-100 rounded-2xl px-6 py-4 hover:shadow-lg hover:border-pink-300 transition"
//             >
//               <div className="flex items-center gap-3">

//                 {player.rank === 1 && (
//                   <Crown className="text-yellow-500" />
//                 )}

//                 {/* <span className="font-bold text-lg"> */}
//                 <span className="font-bold text-base sm:text-lg">
//                   #{player.rank}
//                 </span>

//               </div>


//               <div className="flex items-center gap-3">

//                 <img
//                   src={`https://i.pravatar.cc/150?img=${player.rank + 20}`}
//                   alt=""
//                   className="w-11 h-11 rounded-full"
//                 />

//                 {/* <span className="font-semibold text-gray-700"> */}
//                 <span className="font-semibold text-gray-700 text-sm sm:text-base">
//                   {player.name}
//                 </span>

//               </div>


//               <div className="flex items-center gap-2">

//                 <Gift
//                   className="text-pink-500"
//                   size={20}
//                 />

//                 {/* <span className="font-semibold text-pink-600"> */}
//                 <span className="font-semibold text-pink-600 text-sm">
//                   {player.prize}
//                 </span>

//               </div>


//               {/* <div className="font-bold text-purple-600"> */}
//               <div className="font-bold text-purple-600 text-sm sm:text-base">
//                 {player.points}
//               </div>

//               {/* <div className="text-gray-500"> */}
//               <div className="text-gray-500 text-sm">
//                 {player.time}
//               </div>

//             </div>

//           ))}

//         </div>

//         {/* <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-white flex justify-between items-center"> */}
//           <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 p-5 sm:p-6 text-white flex flex-col lg:flex-row gap-6 justify-between items-center text-center lg:text-left">
          
//           <div>

//             {/* <h2 className="text-2xl font-bold"> */}
//             <h2 className="text-xl sm:text-2xl font-bold">
//               🎁 Weekly Mega Prize
//             </h2>

//             <p className="mt-2 opacity-90">
//               Top 3 winners will receive exciting cash rewards and
//               exclusive vouchers.
//             </p>

//           </div>

//           <button 
//             // className="bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:scale-105 duration-300"
//             className="w-full sm:w-auto bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:scale-105 duration-300"
//           >

//             View Rewards

//           </button>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default LeaderboardSection;


import React from "react";
import { Crown, Trophy, Gift } from "lucide-react";

const leaderboard = [
  {
    rank: 1,
    name: "Shivam Pal",
    prize: "₹5,000",
    points: 980,
    time: "08:25",
  },
  {
    rank: 2,
    name: "Rahul Patel",
    prize: "₹3,000",
    points: 965,
    time: "09:12",
  },
  {
    rank: 3,
    name: "Aman Shah",
    prize: "₹2,000",
    points: 950,
    time: "09:45",
  },
  {
    rank: 4,
    name: "Priya Singh",
    prize: "₹1,000",
    points: 940,
    time: "10:18",
  },
  {
    rank: 5,
    name: "Karan Mehta",
    prize: "Gift Card",
    points: 930,
    time: "11:03",
  },
];

const LeaderboardSection = () => {
  return (
    <section className="mt-10">
      <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-4 sm:p-6 lg:p-8">

        {/* Header */}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 mb-8">

          <div className="flex items-center gap-3">

            <Trophy className="text-yellow-500 w-8 h-8 sm:w-9 sm:h-9" />

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                Today's Leaderboard
              </h2>

              <p className="text-gray-500 text-sm sm:text-base">
                Top performers of today's quiz
              </p>
            </div>

          </div>

          <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 duration-300">
            View All
          </button>

        </div>

        {/* Responsive Table */}

        <div className="overflow-x-auto">

          <div className="min-w-[760px]">

            {/* Header */}

            <div className="grid grid-cols-5 bg-purple-50 rounded-2xl px-6 py-4 font-bold text-purple-700">

              <div>Rank</div>

              <div>Leaderboard</div>

              <div>Prizes</div>

              <div>Points</div>

              <div>Time</div>

            </div>

            {/* Rows */}

            <div className="mt-3 space-y-3">

              {leaderboard.map((player) => (

                <div
                  key={player.rank}
                  className="grid grid-cols-5 items-center bg-white border border-purple-100 rounded-2xl px-6 py-4 hover:shadow-lg hover:border-pink-300 transition"
                >

                  <div className="flex items-center gap-3">

                    {player.rank === 1 && (
                      <Crown className="text-yellow-500" />
                    )}

                    <span className="font-bold text-lg">
                      #{player.rank}
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <img
                      src={`https://i.pravatar.cc/150?img=${player.rank + 20}`}
                      alt={player.name}
                      className="w-11 h-11 rounded-full"
                    />

                    <span className="font-semibold text-gray-700">
                      {player.name}
                    </span>

                  </div>
                                    <div className="flex items-center gap-2">

                    <Gift
                      className="text-pink-500"
                      size={20}
                    />

                    <span className="font-semibold text-pink-600">
                      {player.prize}
                    </span>

                  </div>

                  <div className="font-bold text-purple-600">
                    {player.points}
                  </div>

                  <div className="text-gray-500">
                    {player.time}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Weekly Prize */}

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 p-5 sm:p-6 text-white flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-xl sm:text-2xl font-bold">
              🎁 Weekly Mega Prize
            </h2>

            <p className="mt-2 opacity-90 text-sm sm:text-base">
              Top 3 winners will receive exciting cash rewards and
              exclusive vouchers.
            </p>

          </div>

          <button className="w-full sm:w-auto bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:scale-105 duration-300">
            View Rewards
          </button>

        </div>

      </div>

    </section>
  );
};

export default LeaderboardSection;