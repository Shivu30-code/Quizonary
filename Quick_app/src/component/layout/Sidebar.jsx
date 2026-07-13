// import React, { useState } from "react";
// import logo from "../../assets/logo.png";
// import {
//   House,
//   Trophy,
//   Gift,
//   Bell,
//   History,
//   Wallet,
//   User,
//   CircleHelp,
//   LogOut,
//   Menu,
//   X,
// } from "lucide-react";

// const menus = [
//   { name: "Home", icon: House },
//   { name: "Leaderboard", icon: Trophy },
//   { name: "Rewards", icon: Gift },
//   { name: "Notifications", icon: Bell },
//   { name: "Quiz History", icon: History },
//   { name: "Wallet", icon: Wallet },
//   { name: "Profile", icon: User },
//   { name: "Help & Support", icon: CircleHelp },
// ];

// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//   return (
//     <aside
//     className={`
//     fixed top-0 left-0 z-50
//     h-screen w-72
//     bg-white shadow-2xl border-r border-purple-100
//     flex flex-col
//     transition-all duration-300
//     ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//     `}
//     >
//       {/* Logo */}

//    <div className="flex justify-center items-center py-6 border-b">
//         <img
//             src={logo}
//             alt="QuickQuiz"
//             className="h-24 object-contain"
//         />
//     </div>

//       {/* Menu */}

//       <div className="flex-1 overflow-y-auto px-5 py-6">

//         {menus.map((item, index) => (
//           <button
//             key={index}
//             className={`group w-full flex items-center gap-4 px-4 py-4 rounded-2xl mb-3 transition duration-300
//             ${
//               item.name === "Home"
//                 ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
//                 : "hover:bg-purple-50 text-gray-700"
//             }`}
//           >
//             <item.icon size={22} />

//             <span className="font-medium">
//               {item.name}
//             </span>
//           </button>
//         ))}
//       </div>

//       {/* Logout */}

//       <div className="p-5 border-t">

//         <button className="w-full flex items-center justify-center gap-3 bg-red-50 hover:bg-red-100 text-red-500 rounded-2xl py-3 transition">

//           <LogOut size={20} />

//           Logout

//         </button>

//       </div>
//       <div className="grid grid-cols-2 gap-3 mt-5">

// <img
// src={image1}
// className="rounded-xl"
// />

// <img
// src={image2}
// className="rounded-xl"
// />

// </div>

//     </aside>
//   );
// };

// export default Sidebar;

// import logo from "../../assets/logo.png";
// import promo1 from "../../assets/promo1.png";
// import promo2 from "../../assets/promo2.jpg";

// import {
//   House,
//   Trophy,
//   Gift,
//   Bell,
//   History,
//   Wallet,
//   User,
//   CircleHelp,
//   LogOut,
//   X,
// } from "lucide-react";

// const menus = [
//   { name: "Home", icon: House },
//   { name: "Leaderboard", icon: Trophy },
//   { name: "Rewards", icon: Gift },
//   { name: "Notifications", icon: Bell },
//   { name: "Quiz History", icon: History },
//   { name: "Wallet", icon: Wallet },
//   { name: "Profile", icon: User },
//   { name: "Help & Support", icon: CircleHelp },
// ];

// const Sidebar = ({ open, setOpen }) => {
//   return (
//     <>
//       {/* Overlay */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-purple-100 shadow-2xl transition-all duration-300
//         ${open ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0`}
//       >
//         {/* Header */}

//         <div className="relative border-b py-6 flex justify-center items-center">
//           <img src={logo} className="h-20 object-contain" />

//           <button
//             onClick={() => setOpen(false)}
//             className="absolute right-4 lg:hidden"
//           >
//             <X />
//           </button>
//         </div>

//         {/* Menu */}

//         <div className="px-5 py-6 flex-1 overflow-y-auto">

//           {menus.map((item) => (
//             <button
//               key={item.name}
//               className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl mb-3 transition
//               ${
//                 item.name === "Home"
//                   ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
//                   : "hover:bg-purple-50"
//               }`}
//             >
//               <item.icon size={22} />

//               {item.name}
//             </button>
//           ))}
//         </div>

//         {/* Bottom */}

//         <div className="p-5 border-t">

//           <img
//             src={promo1}
//             className="rounded-2xl mb-4"
//           />

//           <img
//             src={promo2}
//             className="rounded-2xl mb-5"
//           />

//           <button className="w-full flex items-center justify-center gap-3 bg-red-50 text-red-500 py-3 rounded-2xl hover:bg-red-100">

//             <LogOut size={20} />

//             Logout

//           </button>

//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import logo from "../../assets/logo.png";
import image1 from "../../assets/promo1.png"; 
import image2 from "../../assets/promo2.png"; 
import {
  House,
  Trophy,
//   Gift,
  Bell,
  History,
  User,
  CircleHelp,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const menus = [
  { name: "Home", icon: House },
  { name: "Leaderboard", icon: Trophy },
//   { name: "Rewards", icon: Gift },
  { name: "Notifications", icon: Bell },
  { name: "Quiz History", icon: History },
  { name: "Profile", icon: User },
  { name: "Help & Support", icon: CircleHelp },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-[60] bg-purple-600 text-white p-2 rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
        fixed top-0 left-0 z-50
        h-screen w-72
        bg-white shadow-2xl border-r border-purple-100
        flex flex-col
        transition-transform duration-300
        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        {/* Close Button */}

        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 cursor-pointer"
          >
            <X size={28} />
          </button>
        </div>

        {/* Logo */}

        <div className="flex justify-center items-center border-b pb-5">
          <img
            src={logo}
            alt="QuickQuiz"
            className="h-24 object-contain"
          />
        </div>

        {/* Menu */}

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {menus.map((item, index) => (
            <button
              key={index}
              className={`group w-full flex items-center gap-4 px-4 py-4 rounded-2xl mb-3 transition-all duration-300
              ${
                item.name === "Home"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-purple-50 hover:translate-x-1"
              }`}
            >
              <item.icon
                size={22}
                className="group-hover:scale-110 transition"
              />

              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Bottom */}

        <div className="border-t p-5">
          <button className="w-full flex items-center justify-center gap-3 bg-red-50 hover:bg-red-100 text-red-500 rounded-2xl py-3 transition">
            <LogOut size={20} />
            Logout
          </button>

          {/* Images */}

          {/* <div className="grid grid-rows gap-3 mt-5">
            <img
              src={image1}
              alt=""
              className="rounded-xl h-28 w-full object-cover shadow-md"
            />

            <img
              src={image2}
              alt=""
              className="rounded-xl h-28 w-full object-cover shadow-md"
            />
          </div> */}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;