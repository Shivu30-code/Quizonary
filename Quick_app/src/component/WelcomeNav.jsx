import React,{ useState } from "react";
import logo from "../assets/logo.png";
import navBg from "../assets/navBg.png"
import homeBg from "../assets/homeBg.png"
import { Menu,X } from "lucide-react";
import { NavLink } from "react-router-dom";

const WelcomeNav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 overflow-hidden shadow-[0_8px_30px_rgba(157,78,221,0.35)] border-b border-purple-900/20">

        <div className="absolute inset-0 bg-gradient-to-r from-[#240046] via-[#5A189A] to-[#9D4EDD]"/>

        <img
            src={navBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
        />

        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

            <div className="flex items-center gap-3 cursor-pointer">
                <img
                    src={logo}
                    alt="QuickQuiz"
                    className="h-25 w-auto object-contain"
                />
            </div>
            <div className="hidden md:flex items-center gap-10 text-white font-medium">
                <NavLink to="/home" className="hover:text-purple-200 transition">Home</NavLink>

                <NavLink to="/about" className="hover:text-purple-200 transition">About</NavLink>
                <NavLink to="/contact" className="hover:text-purple-200 transition">Contact</NavLink>

                <NavLink to="/login" className="px-6 py-2.5 rounded-xl text-white font-semibold bg-white/15 border border-white/20 backdrop-blur-md hover:bg-white/25 transition">
                    Login
                </NavLink>
                <NavLink to="/register" className="px-6 py-2.5 rounded-xl text-white font-semibold bg-white/15 border border-white/20 backdrop-blur-md hover:bg-white/25 transition">
                    Register
                </NavLink>

            </div>

            <button className="md:hidden text-white" onClick={() => setIsOpen(true)}
            >
                <Menu size={30} />
            </button>
        </div>
        <div
            className={`fixed top-0 right-0 h-full w-72 overflow-hidden shadow-2xl z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#240046] via-[#5A189A] to-[#9D4EDD]" />
            <img
                src={homeBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-screen"
            />

            <div className="absolute inset-0 backdrop-blur-md bg-black/20" />
            <div className="relative z-10 h-full">
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                    <img src={logo} alt="QuickQuiz" className="h-14" />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-purple-300 transition"
                    >
                        <X size={28} />
                    </button>
                </div>

            
                <div className="flex flex-col p-6 gap-5 text-white font-medium">
                    <NavLink
                        to="/home"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-purple-300 transition"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-purple-300 transition"
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-purple-300 transition"
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="mt-6 rounded-xl py-3 text-center bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl py-3 text-center bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition"
                    >
                        Register
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default WelcomeNav;