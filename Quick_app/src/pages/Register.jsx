import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  X,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";
import navBg from "../assets/navBg.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
  try {
    const res = await API.post("/auth/register", data);

    alert(res.data.message);

    localStorage.setItem("email", data.email);

    navigate("/verify-otp");

  } 
  // catch (error) {
  //   alert(error.response?.data?.message || "Something went wrong");
  // }
  catch (error) {
  console.log(error);

  alert(
    error.response?.data?.message ||
    error.message ||
    "Unknown Error"
  );
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

      <div className="absolute -top-20 left-0 w-96 h-96 bg-purple-600/30 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 blur-[150px] rounded-full" />

      <div className="relative z-10 flex items-center justify-center min-h-screen  px-4 sm:px-6 py-20 sm:py-10">
        <button type="button" onClick={() => navigate("/")}
          className="fixed top-4 right-4 md:absolute md:top-5 md:right-5 z-50 h-11 w-11 rounded-full bg-black/40
          backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-500
          hover:border-red-500 transition-all duration-300"                  >
          <X size={22} />
        </button>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl
          p-6 sm:p-8 lg:p-10">
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt="logo" 
              className="h-16 sm:h-20 lg:h-24"
            />
          </div>

          <h1 className="mt-5 text-center text-3xl sm:text-4xl font-bold text-white">
            Create Account 
          </h1>

          <p className="text-center text-gray-300 mt-2">
            Join QuickQuiz and start winning rewards.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >

            <div>

              <label className="text-gray-300">
                Full Name
              </label>

              <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/10 px-4 focus-within:border-purple-500">

                <User className="text-purple-300" />

                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full bg-transparent py-3.5 sm:py-4 px-3 text-white outline-none"

                  {...register("fullName", {
                    required: "Full Name Required",
                  })}
                />

              </div>

              <p className="text-red-400 text-sm mt-1">
                {errors.fullName?.message}
              </p>

            </div>

            <div>

              <label className="text-gray-300">
                Email
              </label>

              <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/10 px-4">

                <Mail className="text-purple-300" />

                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-transparent py-3.5 sm:py-4 px-3 text-white outline-none"

                  {...register("email", {
                    required: "Email Required",
                  })}
                />

              </div>

              <p className="text-red-400 text-sm mt-1">
                {errors.email?.message}
              </p>

            </div>

            <div>

              <label className="text-gray-300">
                Mobile Number
              </label>

              <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/10 px-4">

                <Smartphone className="text-purple-300" />

                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="w-full bg-transparent py-3.5 sm:py-4 px-3 text-white outline-none"

                  {...register("mobile", {
                    required: "Mobile Number Required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter Valid Mobile Number",
                    },
                  })}
                />

              </div>

              <p className="text-red-400 text-sm mt-1">
                {errors.mobile?.message}
              </p>

            </div>

            <div>

              <label className="text-gray-300">
                Password
              </label>

              <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/10 px-4">

                <Lock className="text-purple-300" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-transparent py-3.5 sm:py-4 px-3 text-white outline-none"

                  {...register("password", {
                    required: "Password Required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 Characters",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>

              </div>

              <p className="text-red-400 text-sm mt-1">
                {errors.password?.message}
              </p>

            </div>

            <div>

              <label className="text-gray-300">
                Confirm Password
              </label>

              <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/10 px-4">

                <Lock className="text-purple-300" />

                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full bg-transparent py-3.5 sm:py-4 px-3 text-white outline-none"

                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff /> : <Eye />}
                </button>

              </div>

              <p className="text-red-400 text-sm mt-1">
                {errors.confirmPassword?.message}
              </p>

            </div>

            <label className="flex items-start gap-2 text-gray-300 text-sm leading-5">

              <input type="checkbox" required />

              I agree to Terms & Conditions

            </label>

            <button
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 py-3.5 sm:py-4
              text-white font-semibold flex justify-center items-center gap-2 hover:shadow-[0_0_30px_rgba(168,85,247,.5)]
              hover:-translate-y-1 transition-all duration-300"
            >

              Create Account

              <ArrowRight size={20} />

            </button>

          </form>

          <p className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-gray-400">

            Already have an account?

            <NavLink
              to="/login"
              className="ml-2 text-purple-300 font-semibold hover:text-white"
            >
              Login
            </NavLink>

          </p>

        </motion.div>

      </div>

    </div>
  );
};

export default Register;