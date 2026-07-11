import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";
import logo from "../assets/logo.png";
import navBg from "../assets/navBg.png";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await API.post("/auth/forgot-password", data);

      alert(res.data.message);

      localStorage.setItem("email", data.email);

      navigate("/verify-forgot-otp");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050816] overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#240046] via-[#3C096C] to-[#050816]" />

      <img
        src={navBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-purple-600/30 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/30 blur-[150px]" />

      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">

        <button
          onClick={() => navigate("/login")}
          className="fixed top-5 right-5 h-11 w-11 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex justify-center items-center text-white hover:bg-red-500 transition"
        >
          <X size={22} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >

          <div className="flex justify-center">
            <img
              src={logo}
              alt=""
              className="h-20"
            />
          </div>

          <h1 className="text-center text-3xl font-bold text-white mt-5">
            Forgot Password
          </h1>

          <p className="text-center text-gray-300 mt-2">
            Enter your registered email to receive an OTP.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >

            <div>

              <label className="text-gray-300">
                Email Address
              </label>

              <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/10 px-4">

                <Mail className="text-purple-300" />

                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-transparent py-4 px-3 text-white outline-none"

                  {...register("email", {
                    required: "Email is required",
                  })}
                />

              </div>

              <p className="text-red-400 text-sm mt-1">
                {errors.email?.message}
              </p>

            </div>

            <button
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 py-4 text-white font-semibold flex justify-center items-center gap-2 hover:shadow-[0_0_30px_rgba(168,85,247,.5)] transition"
            >

              {loading ? (
                "Sending OTP..."
              ) : (
                <>
                  Send OTP
                  <ArrowRight size={20} />
                </>
              )}

            </button>

          </form>

        </motion.div>

      </div>

    </div>
  );
};

export default ForgotPassword;