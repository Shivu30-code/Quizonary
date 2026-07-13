// import React from "react";
// import { Bell } from "lucide-react";

// const Navbar = () => {
//   return (
//     <div className="h-20 bg-white rounded-3xl shadow-lg px-8 flex justify-between items-center">

//       <div className="ml-68">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Welcome Back 
//         </h2>

//         <p className="text-gray-500">
//           Ready to win today's quiz?
//         </p>
//       </div>

//       <div className="flex items-center gap-5">



//         <button className="relative">

//           <Bell size={24} />

//           <span className="absolute -top-2 -right-2 bg-pink-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
//             2
//           </span>

//         </button>

//         <img
//           src="https://i.pravatar.cc/150?img=12"
//           alt=""
//           className="w-12 h-12 rounded-full border-4 border-purple-200"
//         />

//       </div>

//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

      {/* Left Side */}
      <div className="flex-1 ml-68">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
          Welcome Back 👋
        </h2>

        <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">
          Ready to win today's quiz?
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 sm:gap-5">

        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-purple-50 transition">
          <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />

          <span className="absolute -top-1 -right-1 bg-pink-500 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-semibold">
            2
          </span>
        </button>

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border-2 lg:border-4 border-purple-200 object-cover"
        />

      </div>
    </div>
  );
};

export default Navbar;