import React from "react";
import { Mail,Phone,MapPin} from "lucide-react";
import {FaFacebookF,FaInstagram,FaXTwitter} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import navBg from "../assets/navBg.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#240046] via-[#3C096C] to-[#050816]" />

      <img
        src={navBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />

      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <img src={logo} alt="" className="h-20" />

            <p className="mt-4 text-gray-300 leading-7">
              Quizonary is India's next generation quiz platform where users
              can learn, compete, and win exciting rewards every day.
            </p>
          </div>

          <div>

            <h2 className="text-white text-xl font-bold mb-5">
              Quick Links
            </h2>

            <div className="flex flex-col gap-3">

              <NavLink to="/" className="text-gray-300 hover:text-purple-300 transition">
                Home
              </NavLink>

              <NavLink to="/about" className="text-gray-300 hover:text-purple-300 transition">
                About
              </NavLink>

              <NavLink to="/contact" className="text-gray-300 hover:text-purple-300 transition">
                Contact
              </NavLink>

              <NavLink to="/login" className="text-gray-300 hover:text-purple-300 transition">
                Login
              </NavLink>

            </div>

          </div>

          <div>

            <h2 className="text-white text-xl font-bold mb-5">
              Quiz Categories
            </h2>

            <div className="flex flex-col gap-3 text-gray-300">

              <span>General Knowledge</span>
              <span>Science</span>
              <span>Sports</span>
              <span>Technology</span>
              <span>History</span>

            </div>

          </div>

          <div>

            <h2 className="text-white text-xl font-bold mb-5">
              Contact
            </h2>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-purple-300" />
                support@quizonary.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-purple-300" />
                +91 9876543210
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-purple-300" />
                India
              </div>

            </div>

          </div>

        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-center">
            © 2026 Quizonary. All Rights Reserved.
          </p>

        <div className="flex gap-4">

          <a
            href="#"
            className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
          >
            <FaFacebookF size={20}/>
          </a>

          <a
            href="#"
            className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
          >
            <FaInstagram size={20}/>
          </a>

          <a
            href="#"
            className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition"
          >
            <FaXTwitter size={20}/>
          </a>


        </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;