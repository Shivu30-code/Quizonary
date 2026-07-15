import React, { useState } from "react";
import logo from "../../assets/logo.png";
import {
  House,
  Trophy,
  Bell,
  History,
  User,
  CircleHelp,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useNavigate,NavLink } from "react-router-dom";

const menus = [
  { name: "Home", icon: House, path: "/home" },
  { name: "Leaderboard", icon: Trophy, path: "/leaderboard" },
  { name: "Notifications", icon: Bell, path: "/notifications" },
  { name: "Quiz History", icon: History, path: "/quiz-history" },
  { name: "Profile", icon: User, path: "/profile" },
  { name: "Help & Support", icon: CircleHelp, path: "/help-support" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>


      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-6 left-7 z-[60] bg-gradient-to-r from-purple-600 to-pink-500 text-white p-2.5 rounded-xl shadow-xl active:scale-95 transition"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}



      <aside
        className={`
        fixed top-0 left-0 z-50
        h-screen w-[85%] max-w-[280px] lg:w-72
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
    

        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 cursor-pointer"
          >
            <X size={28} />
          </button>
        </div>

      
        <div className="flex justify-center items-center border-b py-5">
          <img
            src={logo}
            alt="QuickQuiz"
            className="h-16 sm:h-20 lg:h-24 object-contain"
          />
        </div>



<div className="flex-1 overflow-y-auto px-4 sm:px-5 py-5">
  {menus.map((item, index) => (
    <NavLink
      key={index}
      to={item.path}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `group w-full flex items-center gap-3 px-3 sm:px-4 py-3 sm:py-4 rounded-2xl mb-3 transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
            : "text-gray-700 hover:bg-purple-50 hover:translate-x-1"
        }`
      }
    >
      <item.icon
        size={20}
        className="group-hover:scale-110 transition"
      />

      <span className="font-medium text-sm sm:text-base">
        {item.name}
      </span>
    </NavLink>
  ))}
</div>

            <div className="border-t p-4 sm:p-5">
          <button 
            className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-red-50 hover:bg-red-100 text-red-500 rounded-2xl py-3 text-sm sm:text-base font-medium transition-all duration-300"
        >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;