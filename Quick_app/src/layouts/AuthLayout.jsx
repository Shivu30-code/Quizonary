import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import navBg from "../assets/navBg.png";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#050816] overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#240046] via-[#3C096C] to-[#050816]" />

      <img
        src={navBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-600/30 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/30 blur-[160px]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10">

        <button
          onClick={() => navigate("/")}
          className="fixed top-5 right-5 z-50 h-11 w-11 rounded-full
          bg-black/40 backdrop-blur-md border border-white/20
          flex items-center justify-center text-white
          hover:bg-red-500 hover:border-red-500
          transition-all"
        >
          <X size={22} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="w-full max-w-xl rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6 sm:p-8 lg:p-10"
        >

          <div className="flex justify-center">
            <img
              src={logo}
              alt=""
              className="h-20"
            />
          </div>

          {children}

        </motion.div>

      </div>

    </div>
  );
};

export default AuthLayout;