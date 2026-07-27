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
  Bolt
} from "lucide-react";
import { useNavigate,NavLink } from "react-router-dom";
import{cardTheme,headingTheme,textTheme}from "../../utils/theme";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translation/translation";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const { language } = useLanguage();

  const t = translations[language];

  const menus = [
    { name: t.home, icon: House, path: "/home" },
    { name: t.leaderboard, icon: Trophy, path: "/leaderboard" },
    { name: t.notifications, icon: Bell, path: "/notifications" },
    { name: t.quizHistory, icon: History, path: "/quiz-history" },
    { name: t.profile, icon: User, path: "/profile" },
    { name: t.helpSupport, icon: CircleHelp, path: "/help-support" },
    { name: t.settings, icon: Bolt, path: "/settings" },
  ];
  const handleLogout = () => {
    const answer = window.confirm(
        "Are you sure you want to logout?"
    );

    if (answer) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login"); 
    }
  };  
  

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
        bg-white text-gray-800 dark:text-white shadow-2xl border-r border-purple-100
        flex flex-col
        transition-transform duration-300 theme-card
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
            className="text-gray-700 theme-text rounded-full cursor-pointer theme-danger"
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
            : "text-gray-500 dark:text-gray-800 hover:bg-purple-50 dark:hover:bg-[#111827] hover:translate-x-1 theme-text"
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
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-red-50 dark:bg-red-950 dark:hover:bg-red-900  
            hover:bg-red-100 text-red-500 rounded-2xl py-3 text-sm sm:text-base font-medium transition-all duration-300 theme-text"
          >
            <LogOut size={20} />
            {t.logout}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;